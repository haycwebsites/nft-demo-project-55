import { useHayc } from '../hayc/config-context';

export default function TestimonialSection() {
  const { t, img, cp } = useHayc();

  return (
    <section 
      id="testimonios" 
      className="testimonial-area gray-bg testimonial-p pt-115 pb-185 text-center" 
      style={{ backgroundImage: `url(${img('/img/testimonial/test-bg.jpg')})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="section-title center-align mb-40 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
              <span {...cp('index.testimonial.subtitle')}>
                {t({
                  el: 'Εμπειρία μαζί μου',
                  en: 'Experience With me'
                })}
              </span>
              <h2 {...cp('index.testimonial.title')}>
                {t({
                  el: 'Μαρτυρίες',
                  en: 'Testimonials'
                })}
              </h2>
            </div>
            <div className="testimonial-active">
              <div className="single-testimonial">
                <i className="fas fa-quote-left"></i>
                <p {...cp('index.testimonial.testimonials.0.content')}>
                  {t({
                    el: '"Το όνομα liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper ."',
                    en: '"Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper ."'
                  })}
                </p>
                <div className="testi-author text-center">
                  <img src={img('/img/testimonial/testi_avatar.png')} alt="img" />
                  <div className="ta-info">
                    <h6 {...cp('index.testimonial.testimonials.0.author')}>
                      {t({
                        el: 'Κος Γιάννης Δόσης',
                        en: 'Mr Jone Dose'
                      })}
                    </h6>
                    <span {...cp('index.testimonial.testimonials.0.position')}>
                      {t({
                        el: 'Προγραμματιστής Ιστοσελίδων',
                        en: 'Web Developer'
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <i className="fas fa-quote-left"></i>
                <p {...cp('index.testimonial.testimonials.1.content')}>
                  {t({
                    el: '"Το όνομα liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper ."',
                    en: '"Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper ."'
                  })}
                </p>
                <div className="testi-author text-center">
                  <img src={img('/img/testimonial/testi_avatar.png')} alt="img" />
                  <div className="ta-info">
                    <h6 {...cp('index.testimonial.testimonials.1.author')}>
                      {t({
                        el: 'Μαργαρίτα Ρ. Ρόμπινσον',
                        en: 'Margie R. Robinson'
                      })}
                    </h6>
                    <span {...cp('index.testimonial.testimonials.1.position')}>
                      {t({
                        el: 'Προγραμματιστής Ιστοσελίδων',
                        en: 'Web Developer'
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <i className="fas fa-quote-left"></i>
                <p {...cp('index.testimonial.testimonials.2.content')}>
                  {t({
                    el: '"Το όνομα liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper ."',
                    en: '"Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestiesoluta nobis eleifend option congue is nihil imper ."'
                  })}
                </p>
                <div className="testi-author text-center">
                  <img src={img('/img/testimonial/testi_avatar.png')} alt="img" />
                  <div className="ta-info">
                    <h6 {...cp('index.testimonial.testimonials.2.author')}>
                      {t({
                        el: 'Κος Γιάννης Δόσης',
                        en: 'Mr Jone Dose'
                      })}
                    </h6>
                    <span {...cp('index.testimonial.testimonials.2.position')}>
                      {t({
                        el: 'Προγραμματιστής Ιστοσελίδων',
                        en: 'Web Developer'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}