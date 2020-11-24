import React from 'react';
import styled from 'styled-components';

const SectionContent = styled.section`
padding:50px 0px 50px;
max-width:1000px;
margin:0 auto;
`

export default function Section({ children }) {
    return (
        <SectionContent>
            {children}
        </SectionContent>
    )
}