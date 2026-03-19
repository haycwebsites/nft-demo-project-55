import { useHayc } from '../hayc/config-context';

interface SliderItem {
  title: string;
  bedrooms: string;
  squareFeet: string;
  bathrooms: string;
  parking: string;
  price: string;
  ctaText: string;
  videoUrl: string;
  backgroundImage: string;
}

export default function HeroSection() {
  const { t, img, cp, config } = useHayc();

  const heroConfig = config.siteConfig.homePage?.hero || {};
  const slides = heroConfig.slides || [];

  if (!slides.length) return null;

  return (
    <section id="home" className="slider-area fix p-relative">
      <div className="slider-active">
        {slides.map((slide: SliderItem, index: number) => (
          <div 
            key={index}
            className="single-slider slider-bg d-flex align-items-center" 
            style={{ backgroundImage: `url(${img(slide.backgroundImage)})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slider-content s-slider-content text-left">
                    <h2 
                      {...cp(`homePage.hero.slides.${index}.title`)}
                      data-animation="fadeInUp" 
                      data-delay=".4s"
                      dangerouslySetInnerHTML={{ __html: t(slide.title) }}
                    />
                    <ul data-animation="fadeInUp" data-delay=".6s">
                      <li>
                        <i className="fas fa-bed"></i>
                        <span {...cp(`homePage.hero.slides.${index}.bedrooms`)}>
                          {t(slide.bedrooms)}
                        </span>
                      </li>
                      <li>
                        <i className="fal fa-pencil-ruler"></i>
                        <span {...cp(`homePage.hero.slides.${index}.squareFeet`)}>
                          {t(slide.squareFeet)}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-bath"></i>
                        <span {...cp(`homePage.hero.slides.${index}.bathrooms`)}>
                          {t(slide.bathrooms)}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-car"></i>
                        <span {...cp(`homePage.hero.slides.${index}.parking`)}>
                          {t(slide.parking)}
                        </span>
                      </li>
                    </ul>
                    <div className="slider-btn mt-55">
                      <a 
                        href="#" 
                        className="btn ss-btn" 
                        data-animation="fadeInRight" 
                        data-delay=".8s"
                        {...cp(`homePage.hero.slides.${index}.ctaText`)}
                      >
                        {t(slide.ctaText)}
                      </a>
                      <a 
                        href={slide.videoUrl} 
                        className="video-i popup-video" 
                        data-animation="fadeInUp" 
                        data-delay=".8s" 
                        style={{ animationDelay: '0.8s' }} 
                        tabIndex={0}
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="slider-price">
                    <h3>Price:</h3>
                    <h2 {...cp(`homePage.hero.slides.${index}.price`)}>
                      {t(slide.price)}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}