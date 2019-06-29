import React, { Component } from 'react';
import {
    Text,
    TextContent,
    Gallery,
    GalleryItem,

} from '@patternfly/react-core';

import { ChartDonutUtilization } from '@patternfly/react-charts';

const CharDonutInGalleryItem = ({ x, y, title, subTitle, width }) => {
    return (
        <GalleryItem>
            <ChartDonutUtilization
                data={{ x: x, y: y }}
                labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
                subTitle={subTitle}
                title={title}
                width={width}
                thresholds={[{ value: 60 }, { value: 90 }]}
            />
        </GalleryItem>
    )
}

export default class LimitSummary extends Component {
    render() {
        const width = 400
        const chars = [
            { x: 'Instances used', y: 2, title: 'Instances', subTitle: "2 of 100", width: width },
            { x: 'vCPUs used', y: 10, title: 'vCPUs', subTitle: '2 of 20', width: width },
            { x: 'RAM used', y: 80, title: 'RAM', subTitle: '40 of 50GB', width: width },
            { x: 'Security groups used', y: 90, title: 'Security Groups', subTitle: '9 out of 10', width: width },
        ]
        return (
            <React.Fragment>
                <TextContent>
                    <Text component="h1">Overview</Text>
                    <Text component="h2">Limit Summary</Text>
                </TextContent>
                <Gallery gutter="md">
                    {chars.map((char, i) =>
                        <CharDonutInGalleryItem key={i} {...char} />
                    )}
                </Gallery>
            </React.Fragment>
        )
    }
}