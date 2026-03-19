import { useHayc } from '../hayc/config-context';

export function NeighborhoodsSection() {
  const { t, cp } = useHayc();

  return (
    <section id="services" className="services-area services-bg services-two pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
              <span {...cp('neighborhoods.subtitle')}>{t({ el: 'villa neihborhoods', en: 'villa neighborhoods' })}</span>
              <h2 {...cp('neighborhoods.title')}>{t({ el: 'Neighborhoods', en: 'Neighborhoods' })}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
              <div className="second-services-content">
                <h5 {...cp('neighborhoods.hospital.title')}>{t({ el: 'Hospital', en: 'Hospital' })}</h5>
                <p {...cp('neighborhoods.hospital.description')}>{t({ el: 'Christ, General Hospital 0.18km', en: 'Christ, General Hospital 0.18km' })}</p>
              </div>
              <div className="services-icon">
                <i className="far fa-star-half"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="s-single-services active wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
              <div className="second-services-content">
                <h5 {...cp('neighborhoods.supermarket.title')}>{t({ el: 'Super Market', en: 'Super Market' })}</h5>
                <p {...cp('neighborhoods.supermarket.description')}>{t({ el: 'Moonfrog Super Market 0.25km', en: 'Moonfrog Super Market 0.25km' })}</p>
              </div>
              <div className="services-icon">
                <i className="far fa-star-half"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
              <div className="second-services-content">
                <h5 {...cp('neighborhoods.restaurant.title')}>{t({ el: 'Restaurant', en: 'Restaurant' })}</h5>
                <p {...cp('neighborhoods.restaurant.description')}>{t({ el: 'hot chicken grill 0.4km', en: 'hot chicken grill 0.4km' })}</p>
              </div>
              <div className="services-icon">
                <i className="far fa-star-half"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
              <div className="second-services-content">
                <h5 {...cp('neighborhoods.mall.title')}>{t({ el: 'Shopping Mall', en: 'Shopping Mall' })}</h5>
                <p {...cp('neighborhoods.mall.description')}>{t({ el: 'Amsterdam Shopping Mall 0.13km', en: 'Amsterdam Shopping Mall 0.13km' })}</p>
              </div>
              <div className="services-icon">
                <i className="far fa-star-half"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
              <div className="second-services-content">
                <h5 {...cp('neighborhoods.coffee.title')}>{t({ el: 'Coffee Pot', en: 'Coffee Pot' })}</h5>
                <p {...cp('neighborhoods.coffee.description')}>{t({ el: 'McAfee Coffee Shop 0.35km', en: 'McAfee Coffee Shop 0.35km' })}</p>
              </div>
              <div className="services-icon">
                <i className="far fa-star-half"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
              <div className="second-services-content">
                <h5 {...cp('neighborhoods.metro.title')}>{t({ el: 'Metro Stations', en: 'Metro Stations' })}</h5>
                <p {...cp('neighborhoods.metro.description')}>{t({ el: 'Metro Stations 0.50km', en: 'Metro Stations 0.50km' })}</p>
              </div>
              <div className="services-icon">
                <i className="far fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}