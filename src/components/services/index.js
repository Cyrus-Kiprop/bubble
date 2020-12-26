import React from 'react';
import styled from 'styled-components'

import Section from "../page-elements/section";
import SectionTitle from "../shared/SectionTitle";
import Row from "../shared/Row";
import WhatIDoItem from './WhatIDoItem'

const services = [
    {
        imgUrl: "https://img.icons8.com/nolan/64/web-design.png",
        heading: "web Development",
        body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
    },
    {
        imgUrl: "https://img.icons8.com/nolan/64/api-settings.png",
        heading: "API Design",
        body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
    },
    {
        imgUrl:"https://img.icons8.com/color/48/000000/database-restore.png",
        heading: "Database Services",
        body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
    },
    {
        imgUrl:"https://img.icons8.com/nolan/64/cloud-sync.png",
        heading: "Cloud Services",
        body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
    },



]


function Index(props) {
    return (
        <Section>
            <ServiceWrapper>
                <SectionTitle title={"What I do"} />
                <Row>
                    {
                        services&&services.map((item)=> {
                            return (
                                <div className={"col-12 col-md-6"}>
                                <WhatIDoItem heading={item.heading} imgUrl={item.imgUrl} body={item.body}/>
                            </div>
                            )
                        })
                    }
                </Row>
            </ServiceWrapper>
        </Section>
    );
}

export default Index;

const ServiceWrapper = styled.div`
`