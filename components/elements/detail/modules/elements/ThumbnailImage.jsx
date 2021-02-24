import React from 'react';
import { isStaticData } from '../../../../../utilities/app-settings';
import { baseUrl } from '../../../../../repositories/Repository';
import ReactMagicZoom from 'react-magic-zoom';
import MagicZoom from '../../../magiczoom/reactMagicZoom'
import im from '../../../../../public/static/img/support.jpg';
import SliderImage from 'react-zoom-slider';

class ThumbnailImage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        const test = [];
        this.props.product.images.length > 0 && this.props.product.images.map((item, index) => {
            let newpro = { 'image': item }
            test.push(newpro)
        })

        return (
            <div className="ps-product__thumbnail">
                {
                    this.props.product.images.length > 0 &&
                    <SliderImage
                        data={test}
                        width="500px"
                        showDescription={false}
                        direction="right"
                    />
                }
            </div>
        )
    }
}

export default ThumbnailImage;
