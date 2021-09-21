import './Banner.scss';
import { Grid } from 'semantic-ui-react'

function Banner() {
    return (
        <Grid>
            <Grid.Row>
                <div className="banner">
                    <div className="banner__image">
                        <img src="http://placehold.it/370x300" alt="banner" />
                    </div>
                    <div className="banner__content">
                        <div className="category">Hoa tươi</div>
                        <div className="title">Bó hoa hồng tươi</div>
                    </div>
                    <div className="banner__action">
                        <button>Buy Now</button>
                    </div>
                </div>
            </Grid.Row>
        </Grid>
    )
}

export default Banner
