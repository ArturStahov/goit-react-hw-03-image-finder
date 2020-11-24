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


export default class App extends Component {

    state = {
        images: [],
        formSearch: '',
        page: 1,
        loading: false,
        error: null,
        largeImgUrl: null,
        isfullHits: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.formSearch !== this.state.formSearch) {
            this.fethApi()
        }
        if (prevState.page !== this.state.page) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }

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
                            isfullHits: false
                        }
                    })
                } else {
                    this.setState({
                        isfullHits: true
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
            isfullHits: false
        })
    }

    openModal = (urlImgLarge) => {
        this.setState({
            largeImgUrl: urlImgLarge
        })
    }

    closeModal = () => {
        this.setState({ largeImgUrl: null })
    }

    render() {
        const { images, loading, error, largeImgUrl, isfullHits } = this.state
        return (
            <Fragment>

                <PageHeader>
                    <FormSearch onSearch={this.handlerFormSubmit} />
                </PageHeader>
                <main>
                    <Section>
                        {images.length > 0 && <ImageListRender imagesArr={images} onGetLargeImg={this.openModal} />}
                        {loading && <Spinner />}
                        {error && <Notification message={`Error loading:${error.message}`} />}
                        {!loading && images.length > 0 && !isfullHits && (<ButtonLoadMore onLoad={this.fethApi} />)}
                        <div id='trackingObj' />
                    </Section>

                </main>
                {largeImgUrl && <Modal imgUrl={this.state.largeImgUrl} onCloseModal={this.closeModal} />}
            </Fragment>
        )
    }
}
