import { useHayc } from '../hayc/config-context';

export default function ApartmentPlansSection() {
  const { t, img, cp } = useHayc();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
              <p {...cp('apartmentPlansSection.cta.subtitle')}>{t({ el: "Μη διστάσετε να επικοινωνήσετε μαζί μας", en: "Don't hestitate to contact us" })}</p>
              <h2 {...cp('apartmentPlansSection.cta.title')}>{t({ el: "ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ ΤΩΡΑ", en: "MAKE AN APPOINTMENT NOW" })}</h2>
              <h3 {...cp('apartmentPlansSection.cta.phone')}>{t({ el: "666 888 0000", en: "666 888 0000" })}</h3>
              <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                <a href="#" className="btn" {...cp('apartmentPlansSection.cta.button')}>{t({ el: "Επικοινωνία", en: "Contact Us" })}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="apartments pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('apartmentPlansSection.plans.subtitle')}>{t({ el: "Τα Σχέδιά μας", en: "Our Plans" })}</span>
                <h2 {...cp('apartmentPlansSection.plans.title')}>{t({ el: "Σχέδια Διαμερισμάτων", en: "Apartments Plans" })}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-12">
              <div className="tab-content py-3 px-3 px-sm-0 mt-50" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <p {...cp('apartmentPlansSection.plans.apartment1.description1')}>{t({ el: "Υπάρχουν πολλές παραλλαγές αποσπασμάτων διαθέσιμες, αλλά η πλειοψηφία έχει αλλαγή σε κάποια μορφή, με εισαγόμενο χιούμορ ή τυχαίες λέξεις που δεν φαίνονται καν αξιόπιστες.", en: "There are many variations of passages of psum available, but the majority have alteration in some form, by injected humour, or randomised words which don't look even believable." })}</p>
                      <p {...cp('apartmentPlansSection.plans.apartment1.description2')}>{t({ el: "Εάν πρόκειται να χρησιμοποιήσετε ένα απόσπασμα του lorem ipsum είναι απλά δωρεάν κείμενο, πρέπει να είστε σίγουροι ότι δεν υπάρχει τίποτα ντροπιαστικό κρυμμένο.", en: "If you are going to use a passage of lorem ipsum is simply free text, you need to be sure there isn't anything embarrassing hidden." })}</p>
                      <ul>
                        <li {...cp('apartmentPlansSection.plans.apartment1.floorNo')}>FLOOR NO <span className="after"> 6</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment1.rooms')}>ROOMS <span className="after"> 7</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment1.area')}>TOTAL AREA / SQFT <span className="after"> 2800</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment1.parking')}>PARKING <span className="after"> 1</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment1.price')}>PRICE <span className="after"> 2500$/Month</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="apartments-img">
                        <img src={img("/img/floor-chart.jpg")} alt="floor-chart" {...cp('apartmentPlansSection.plans.apartment1.image')}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <p {...cp('apartmentPlansSection.plans.apartment2.description1')}>{t({ el: "Υπάρχουν πολλές παραλλαγές αποσπασμάτων διαθέσιμες, αλλά η πλειοψηφία έχει αλλαγή σε κάποια μορφή, με εισαγόμενο χιούμορ ή τυχαίες λέξεις που δεν φαίνονται καν αξιόπιστες.", en: "There are many variations of passages of psum available, but the majority have alteration in some form, by injected humour, or randomised words which don't look even believable." })}</p>
                      <p {...cp('apartmentPlansSection.plans.apartment2.description2')}>{t({ el: "Εάν πρόκειται να χρησιμοποιήσετε ένα απόσπασμα του lorem ipsum είναι απλά δωρεάν κείμενο, πρέπει να είστε σίγουροι ότι δεν υπάρχει τίποτα ντροπιαστικό κρυμμένο.", en: "If you are going to use a passage of lorem ipsum is simply free text, you need to be sure there isn't anything embarrassing hidden." })}</p>
                      <ul>
                        <li {...cp('apartmentPlansSection.plans.apartment2.floorNo')}>FLOOR NO <span className="after"> 10</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment2.rooms')}>ROOMS <span className="after"> 5</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment2.area')}>TOTAL AREA / SQFT <span className="after"> 2500</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment2.parking')}>PARKING <span className="after"> 1</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment2.price')}>PRICE <span className="after"> 3500$/Month</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="apartments-img">
                        <img src={img("/img/floor-chart.jpg")} alt="floor-chart" {...cp('apartmentPlansSection.plans.apartment2.image')}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <p {...cp('apartmentPlansSection.plans.apartment3.description1')}>{t({ el: "Υπάρχουν πολλές παραλλαγές αποσπασμάτων διαθέσιμες, αλλά η πλειοψηφία έχει αλλαγή σε κάποια μορφή, με εισαγόμενο χιούμορ ή τυχαίες λέξεις που δεν φαίνονται καν αξιόπιστες.", en: "There are many variations of passages of psum available, but the majority have alteration in some form, by injected humour, or randomised words which don't look even believable." })}</p>
                      <p {...cp('apartmentPlansSection.plans.apartment3.description2')}>{t({ el: "Εάν πρόκειται να χρησιμοποιήσετε ένα απόσπασμα του lorem ipsum είναι απλά δωρεάν κείμενο, πρέπει να είστε σίγουροι ότι δεν υπάρχει τίποτα ντροπιαστικό κρυμμένο.", en: "If you are going to use a passage of lorem ipsum is simply free text, you need to be sure there isn't anything embarrassing hidden." })}</p>
                      <ul>
                        <li {...cp('apartmentPlansSection.plans.apartment3.floorNo')}>FLOOR NO <span className="after"> 25</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment3.rooms')}>ROOMS <span className="after"> 18</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment3.area')}>TOTAL AREA / SQFT <span className="after"> 2800</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment3.parking')}>PARKING <span className="after"> 1</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment3.price')}>PRICE <span className="after"> 112999$/Month</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="apartments-img">
                        <img src={img("/img/floor-chart.jpg")} alt="floor-chart" {...cp('apartmentPlansSection.plans.apartment3.image')}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <p {...cp('apartmentPlansSection.plans.apartment4.description1')}>{t({ el: "Υπάρχουν πολλές παραλλαγές αποσπασμάτων διαθέσιμες, αλλά η πλειοψηφία έχει αλλαγή σε κάποια μορφή, με εισαγόμενο χιούμορ ή τυχαίες λέξεις που δεν φαίνονται καν αξιόπιστες.", en: "There are many variations of passages of psum available, but the majority have alteration in some form, by injected humour, or randomised words which don't look even believable." })}</p>
                      <p {...cp('apartmentPlansSection.plans.apartment4.description2')}>{t({ el: "Εάν πρόκειται να χρησιμοποιήσετε ένα απόσπασμα του lorem ipsum είναι απλά δωρεάν κείμενο, πρέπει να είστε σίγουροι ότι δεν υπάρχει τίποτα ντροπιαστικό κρυμμένο.", en: "If you are going to use a passage of lorem ipsum is simply free text, you need to be sure there isn't anything embarrassing hidden." })}</p>
                      <ul>
                        <li {...cp('apartmentPlansSection.plans.apartment4.floorNo')}>FLOOR NO <span className="after"> 16</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment4.rooms')}>ROOMS <span className="after"> 5</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment4.area')}>TOTAL AREA / SQFT <span className="after"> 1800</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment4.parking')}>PARKING <span className="after"> 1</span></li>
                        <li {...cp('apartmentPlansSection.plans.apartment4.price')}>PRICE <span className="after"> 3000$/Month</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="apartments-img">
                        <img src={img("/img/floor-chart.jpg")} alt="floor-chart" {...cp('apartmentPlansSection.plans.apartment4.image')}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="apartments pt-120 pb-90" style={{background:"#f5f5f5"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('apartmentPlansSection.availability.subtitle')}>{t({ el: "Τα Σχέδιά μας", en: "Our Plans" })}</span>
                <h2 {...cp('apartmentPlansSection.availability.title')}>{t({ el: "Επιλέξτε Διαθεσιμότητα", en: "Select Availability" })}</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12">
              {/* Availability content would go here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}