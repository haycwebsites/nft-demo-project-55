import { useHayc } from '../hayc/config-context';

export default function AboutSection() {
  const { t, img, cp } = useHayc();

  return (
    <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="s-about-img p-relative">
              <img 
                src={img("/img/features/about_img02.png")} 
                alt="img"
                {...cp('about.image')}
              />
              <div className="about-text second-about">
                <span {...cp('about.experienceText')}>
                  {t({ el: "35 χρόνια\nεμπειρίας", en: "35 years of\nexperience" })}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content s-about-content pl-30">
              <div className="about-title second-atitle">
                <span {...cp('about.badge')}>
                  {t({ el: "Σχετικά με εμάς", en: "About Us" })}
                </span>
                <h2 {...cp('about.title')}>
                  {t({ el: "Καλώς ήρθατε στο Relxtower μας", en: "Welcome To Our Relxtower" })}
                </h2>
                <p>
                  <span></span>
                  <span {...cp('about.subtitle')}>
                    {t({ el: "Παρέχουμε μια βασική υπηρεσία για εσάς", en: "We provide an essential service for you" })}
                  </span>
                </p>
              </div>
              <p {...cp('about.description')}>
                {t({ el: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiue.", en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiue." })}
              </p>
              <a href="#" className="btn" {...cp('about.button')}>
                {t({ el: "Ξεκινήστε", en: "Get Started" })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}