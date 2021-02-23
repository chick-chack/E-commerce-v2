import React from 'react';
import { isStaticData } from '../../../../../utilities/app-settings';
import { baseUrl } from '../../../../../repositories/Repository';
import ReactMagicZoom from 'react-magic-zoom';
import MagicZoom from '../../../magiczoom/reactMagicZoom'
import im from '../../../../../public/static/img/support.jpg';


class ThumbnailImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:null,
            reflectoinItem: null,
            reflectionChanged: null

        };
        this.handleRefreshReflection = this.handleRefreshReflection.bind(this);
       
      
    }

    handleRefreshReflection(item) {
        this.setState({
            reflectoinItem: item,
            reflectionChanged: new Date(),
        });
    };

    getReflectoinItem() {
        return this.refs.id && this.refs.id.getReflection();
    }
    componentDidMount(){
        this.setState({
            url:this.props.url
        })
    }
render(){
    
    let reflectoinItem1 = this.getReflectoinItem(),
    reflectionOpt = {
        type: 'donor',
        // position: {
        //     // left: '50%',
        //     // top: '10%'
        //     left
        // },
        position:'left',
        scale: 2,
        size: {
            height: 100,
            width: 300
        }

    };


    return(

    //     <MagicZoom>
    //     <span>
    //         <img src={ this.state.url} />
    //     </span>
    // </MagicZoom>
       
                <div>
                    
                    <MagicZoom
                        reflection={reflectionOpt}
                        subscribeOnReflection={this.handleRefreshReflection}
                    >
                        <span>
                            <img src={this.state.url} />
                        </span>
                    </MagicZoom>

                    <div>
                        {reflectoinItem1}
                    </div>
                </div>


    //     <img
    //     src={isStaticData === false ? `${this.state.url}` : this.state.url}
    //     alt="chickchack-image"
    // />
    )
}


}

// const ThumbnailImage = ({ url }) => (
//     <img
//         src={isStaticData === false ? `${url}` : url}
//         alt="chickchack-image"
//     />
// );

export default ThumbnailImage;
