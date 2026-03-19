import { useHayc } from '../hayc/config-context';

export default function BlogDetailsSection() {
  const { t, img, cp } = useHayc();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="breadcrumb-wrap text-center">
              <div className="breadcrumb-title mb-30">
                <h2 {...cp('blogdetails.breadcrumb.title')}>
                  {t({ el: 'Λεπτομέρειες Νέων', en: 'News Details' })}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="inner-blog b-details-p pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="bsingle__post-thumb mb-30">
                  <img 
                    src={img('/img/blog/inner_b1.jpg')} 
                    alt="" 
                    {...cp('blogdetails.mainImage')}
                  />
                </div>
                <div className="meta__info">
                  <ul>
                    <li>
                      <a href="#" {...cp('blogdetails.meta.author')}>
                        <i className="far fa-user"></i>by Zcube
                      </a>
                    </li>
                    <li {...cp('blogdetails.meta.comments')}>
                      <i className="far fa-comments"></i>35 Comments
                    </li>
                  </ul>
                </div>
                <div className="details__content pb-50">
                  <h2 {...cp('blogdetails.content.title')}>
                    {t({ el: 'Με το σημαντικά βελτιωμένο σύστημα ειδοποιήσεων, οι χρήστες έχουν περισσότερο έλεγχο στο μυαλό σας.', en: 'With our vastly improved notifications system, users have more control on your mind.' })}
                  </h2>
                  <p {...cp('blogdetails.content.paragraph1')}>
                    {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo amet set for your cool happiness for lyour loyal city.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo amet set for your cool happiness for lyour loyal city.' })}
                  </p>
                  <p {...cp('blogdetails.content.paragraph2')}>
                    {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.' })}
                  </p>
                  <blockquote {...cp('blogdetails.content.blockquote')}>
                    {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt with ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation a deef ullamco laboris nisi ut aliquip ex ea commodo consequat see you again tommorow.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt with ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation a deef ullamco laboris nisi ut aliquip ex ea commodo consequat see you again tommorow.' })}
                  </blockquote>
                  <p {...cp('blogdetails.content.paragraph3')}>
                    {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant.' })}
                  </p>
                  <div className="details__content-img">
                    <img 
                      src={img('/img/blog/b_details01.jpg')} 
                      alt="" 
                      {...cp('blogdetails.content.image1')}
                    />
                  </div>
                  <p {...cp('blogdetails.content.paragraph4')}>
                    {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod incididunt.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod incididunt.' })}
                  </p>
                  <figure>
                    <img 
                      src={img('/img/blog/b_details02.jpg')} 
                      alt="" 
                      {...cp('blogdetails.content.image2')}
                    />
                    <p {...cp('blogdetails.content.figureText')}>
                      {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' })}
                    </p>
                  </figure>
                  <div className="row">
                    <div className="col-xl-6 col-md-7">
                      <div className="post__tag">
                        <h5 {...cp('blogdetails.tags.title')}>
                          {t({ el: 'Σχετικές Ετικέτες', en: 'Releted Tags' })}
                        </h5>
                        <ul>
                          <li>
                            <a href="#" {...cp('blogdetails.tags.tag1')}>
                              {t({ el: 'οργανικό', en: 'organic' })}
                            </a>
                          </li>
                          <li>
                            <a href="#" {...cp('blogdetails.tags.tag2')}>
                              {t({ el: 'Τρόφιμα', en: 'Foods' })}
                            </a>
                          </li>
                          <li>
                            <a href="#" {...cp('blogdetails.tags.tag3')}>
                              {t({ el: 'νόστιμο', en: 'tasty' })}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-5">
                      <div className="post__share text-right">
                        <h5 {...cp('blogdetails.share.title')}>
                          {t({ el: 'Κοινοποίηση', en: 'Social Share' })}
                        </h5>
                        <ul>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fab fa-gg"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="posts_navigation pt-35 pb-35">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-md-5">
                      <div className="prev-link">
                        <span {...cp('blogdetails.navigation.prevLabel')}>
                          {t({ el: 'Προηγούμενο Άρθρο', en: 'Prev Post' })}
                        </span>
                        <h4>
                          <a href="#" {...cp('blogdetails.navigation.prevTitle')}>
                            {t({ el: 'Συμβουλές για Μινιμαλιστική', en: 'Tips on Minimalist' })}
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-2 text-left text-md-center">
                      <a href="blog" className="blog-filter">
                        <img src={img('/img/icon/c_d01.png')} alt="" />
                      </a>
                    </div>
                    <div className="col-xl-4 col-md-5">
                      <div className="next-link text-left text-md-right">
                        <span {...cp('blogdetails.navigation.nextLabel')}>
                          {t({ el: 'Επόμενο Άρθρο', en: 'next Post' })}
                        </span>
                        <h4>
                          <a href="#" {...cp('blogdetails.navigation.nextTitle')}>
                            {t({ el: 'Το Λιγότερο είναι Περισσότερο', en: 'Less Is More' })}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related__post mt-45 mb-85">
                  <div className="post-title">
                    <h4 {...cp('blogdetails.related.title')}>
                      {t({ el: 'Σχετικά Άρθρα', en: 'Related Post' })}
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="related-post-wrap mb-30">
                        <div className="post-thumb">
                          <img 
                            src={img('/img/blog/b_details03.jpg')} 
                            alt="" 
                            {...cp('blogdetails.related.post1.image')}
                          />
                        </div>
                        <div className="rp__content">
                          <h3>
                            <a href="#" {...cp('blogdetails.related.post1.title')}>
                              {t({ el: 'Μια σειρά εικονιδίων vector εμπνευσμένων από το iOS 7.', en: 'A series of iOS 7 inspire vector icons.' })}
                            </a>
                          </h3>
                          <p {...cp('blogdetails.related.post1.excerpt')}>
                            {t({ el: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore.', en: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore.' })}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="related-post-wrap mb-30">
                        <div className="post-thumb">
                          <img 
                            src={img('/img/blog/b_details04.jpg')} 
                            alt="" 
                            {...cp('blogdetails.related.post2.image')}
                          />
                        </div>
                        <div className="rp__content">
                          <h3>
                            <a href="#" {...cp('blogdetails.related.post2.title')}>
                              {t({ el: 'Sed ut perspiciatis unde omnis iste natus.', en: 'Sed ut perspiciatis unde omnis iste natus.' })}
                            </a>
                          </h3>
                          <p {...cp('blogdetails.related.post2.excerpt')}>
                            {t({ el: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore.', en: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore.' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="avatar__wrap text-center mb-45">
                  <div className="avatar-img">
                    <img 
                      src={img('/img/blog/comment/avatar.png')} 
                      alt="" 
                      {...cp('blogdetails.author.avatar')}
                    />
                  </div>
                  <div className="avatar__info">
                    <h5 {...cp('blogdetails.author.name')}>
                      {t({ el: 'Ροζαλίνα Γουίλιαμ', en: 'Rosalina William' })}
                    </h5>
                    <div className="avatar__info-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-behance"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="avatar__wrap-content">
                    <p {...cp('blogdetails.author.bio')}>
                      {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa aute irure dolor.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa aute irure dolor.' })}
                    </p>
                  </div>
                </div>
                <div className="comment__wrap pb-45 mb-45">
                  <div className="comment__wrap-title">
                    <h5 {...cp('blogdetails.comments.title')}>
                      {t({ el: 'Σχόλια', en: 'Comments' })}
                    </h5>
                  </div>
                  <div className="single__comment mb-35">
                    {/* Comment content would go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}