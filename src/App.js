import React, { Component, Fragment } from 'react'
import PageHeader from './components/HeaderPage'
import FormSearch from './components/FormSearch'
import Section from './components/Section'
import ImageListRender from './components/ImagesListRender'
import ServiceApi from './service/ServiceApi'
import Spinner from './components/Spinner'
import Notification from './components/Notification'
import ErrorInfo from './service/ErrorInfo'
import Modal from './components/Modal'
import ButtonLoadMore from './components/ButtonLoadMore'
import LoadInfinityControl from './components/LoadInfinityControl'
import ButtonScrollTop from './components/ButtonScrollTop'


export default class App extends Component {

    state = {
        images: [],
        formSearch: '',
        page: 1,
        loading: false,
        error: null,
        largeImgUrl: null,
        isFullHits: false,
        isInfinityScroll: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.formSearch !== this.state.formSearch) {
            this.fethApi()
        }
        if (prevState.page !== this.state.page) {
            if (!this.state.isInfinityScroll) {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }

    }

    registrationIntersectionObserver = () => {
        const onEntries = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.state.formSearch !== "" && this.state.isInfinityScroll) {
                    console.log("object is intersecting");
                    this.fethApi();
                }
            });
        };
        const options = {
            rootMargin: "200px",
            threshold: 0.5,
        };
        const observerApi = new IntersectionObserver(onEntries, options);
        const trackingObj = document.querySelector('#trackingObj');
        observerApi.observe(trackingObj);
    }

    fethApi = () => {
        const { formSearch, page } = this.state
        this.setState({
            loading: true
        })
        ServiceApi(formSearch, page)
            .then(data => {
                if (data.hits.length === 0) {
                    ErrorInfo()
                }
                if (this.state.images.length < data.total) {
                    this.setState(prevState => {
                        return {
                            images: [...prevState.images, ...data.hits],
                            page: prevState.page + 1,
                            isFullHits: false
                        }
                    })
                } else {
                    this.setState({
                        isFullHits: true
                    })
                }
            })
            .catch(error => {
                this.setState({
                    error
                })
            })
            .finally(() => {
                this.setState({
                    loading: false
                })
            })
    }

    handlerFormSubmit = (query) => {
        this.setState({
            formSearch: query,
            page: 1,
            images: [],
            isFullHits: false,
        })

    }

    openModal = (urlImgLarge) => {
        this.setState({
            largeImgUrl: urlImgLarge
        })
    }

    closeModal = () => {
        this.setState({
            largeImgUrl: null,
        })
    }

    handleCheckbox = checked => {
        this.setState({
            isInfinityScroll: checked
        })
        this.registrationIntersectionObserver()
    }

    render() {
        const { images, loading, error, largeImgUrl, isFullHits, isInfinityScroll } = this.state
        return (
            <Fragment>

                <PageHeader>
                    <FormSearch onSearch={this.handlerFormSubmit} />
                    <LoadInfinityControl onCheckChange={this.handleCheckbox} />
                </PageHeader>
                <main>
                    <Section>
                        {images.length > 0 && <ImageListRender imagesArr={images} onGetLargeImg={this.openModal} />}
                        {loading && <Spinner />}
                        {error && <Notification message={`Error loading:${error.message}`} />}
                        {!loading && images.length > 0 && !isFullHits && !isInfinityScroll && (<ButtonLoadMore onLoad={this.fethApi} />)}
                        <div id='trackingObj' />
                        {images.length > 0 && <ButtonScrollTop />}
                    </Section>

                </main>
                {largeImgUrl && <Modal imgUrl={this.state.largeImgUrl} onCloseModal={this.closeModal} />}
            </Fragment>
        )
    }
}
