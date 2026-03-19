import { useHayc } from '../hayc/config-context';

export function BlogListingSection() {
  const { t, img, cp } = useHayc();

  return (
    <section className="inner-blog pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="bsingle__post mb-50">
              <div className="bsingle__post-thumb">
                <img src={img('/img/blog/inner_b1.jpg')} alt="" />
              </div>
              <div className="bsingle__content">
                <div className="meta-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-user"></i>
                        <span {...cp('blog.listing.post1.author')}>{t({ el: 'από Zcube', en: 'by Zcube' })}</span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <span {...cp('blog.listing.post1.comments')}>{t({ el: '35 Σχόλια', en: '35 Comments' })}</span>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="blog-details" {...cp('blog.listing.post1.title')}>
                    {t({ el: 'Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.', en: 'Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.' })}
                  </a>
                </h2>
                <p {...cp('blog.listing.post1.excerpt')}>
                  {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' })}
                </p>
                <div className="blog__btn">
                  <a href="#" className="btn" {...cp('blog.listing.post1.readMore')}>
                    {t({ el: 'Διαβάστε Περισσότερα', en: 'Read More' })}
                  </a>
                </div>
              </div>
            </div>

            <div className="bsingle__post mb-50">
              <div className="bsingle__post-thumb video-p">
                <img src={img('/img/blog/inner_b2.jpg')} alt="" />
                <a href="https://www.youtube.com/watch?v=vKSA_idPZkc" className="video-i popup-video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <div className="bsingle__content">
                <div className="meta-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-user"></i>
                        <span {...cp('blog.listing.post2.author')}>{t({ el: 'από Zcube', en: 'by Zcube' })}</span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <span {...cp('blog.listing.post2.comments')}>{t({ el: '35 Σχόλια', en: '35 Comments' })}</span>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="blog-details" {...cp('blog.listing.post2.title')}>
                    {t({ el: 'There are many variations passages of like consectetur lorem ipsum available.', en: 'There are many variations passages of like consectetur lorem ipsum available.' })}
                  </a>
                </h2>
                <p {...cp('blog.listing.post2.excerpt')}>
                  {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' })}
                </p>
                <div className="blog__btn">
                  <a href="#" className="btn" {...cp('blog.listing.post2.readMore')}>
                    {t({ el: 'Διαβάστε Περισσότερα', en: 'Read More' })}
                  </a>
                </div>
              </div>
            </div>

            <div className="bsingle__post mb-50">
              <div className="bsingle__post-thumb blog-active">
                <div className="slide-post">
                  <img src={img('/img/blog/inner_b3.jpg')} alt="" />
                </div>
                <div className="slide-post">
                  <img src={img('/img/blog/inner_b2.jpg')} alt="" />
                </div>
                <div className="slide-post">
                  <img src={img('/img/blog/inner_b1.jpg')} alt="" />
                </div>
              </div>
              <div className="bsingle__content">
                <div className="meta-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-user"></i>
                        <span {...cp('blog.listing.post3.author')}>{t({ el: 'από Zcube', en: 'by Zcube' })}</span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <span {...cp('blog.listing.post3.comments')}>{t({ el: '35 Σχόλια', en: '35 Comments' })}</span>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="blog-details" {...cp('blog.listing.post3.title')}>
                    {t({ el: 'I must explain to you how all this mistaken idea of denouncing pleasure.', en: 'I must explain to you how all this mistaken idea of denouncing pleasure.' })}
                  </a>
                </h2>
                <p {...cp('blog.listing.post3.excerpt')}>
                  {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' })}
                </p>
                <div className="blog__btn">
                  <a href="#" className="btn" {...cp('blog.listing.post3.readMore')}>
                    {t({ el: 'Διαβάστε Περισσότερα', en: 'Read More' })}
                  </a>
                </div>
              </div>
            </div>

            <div className="bsingle__post mb-50">
              <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
                <iframe 
                  height="300" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
              </div>
              <div className="bsingle__content">
                <div className="meta-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-user"></i>
                        <span {...cp('blog.listing.post4.author')}>{t({ el: 'από Zcube', en: 'by Zcube' })}</span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <span {...cp('blog.listing.post4.comments')}>{t({ el: '35 Σχόλια', en: '35 Comments' })}</span>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="blog-details" {...cp('blog.listing.post4.title')}>
                    {t({ el: 'There are many variations passages of like consectetur lorem ipsum available.', en: 'There are many variations passages of like consectetur lorem ipsum available.' })}
                  </a>
                </h2>
                <p {...cp('blog.listing.post4.excerpt')}>
                  {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' })}
                </p>
                <div className="blog__btn">
                  <a href="#" className="btn" {...cp('blog.listing.post4.readMore')}>
                    {t({ el: 'Διαβάστε Περισσότερα', en: 'Read More' })}
                  </a>
                </div>
              </div>
            </div>

            <div className="bsingle__post mb-50">
              <div className="bsingle__content">
                <div className="meta-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-user"></i>
                        <span {...cp('blog.listing.post5.author')}>{t({ el: 'από Zcube', en: 'by Zcube' })}</span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      <span {...cp('blog.listing.post5.comments')}>{t({ el: '35 Σχόλια', en: '35 Comments' })}</span>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="blog-details" {...cp('blog.listing.post5.title')}>
                    {t({ el: 'On the other hand, we denounce with of righteous indignation and dislike men.', en: 'On the other hand, we denounce with of righteous indignation and dislike men.' })}
                  </a>
                </h2>
                <p {...cp('blog.listing.post5.excerpt')}>
                  {t({ el: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' })}
                </p>
                <div className="blog__btn">
                  <a href="#" className="btn" {...cp('blog.listing.post5.readMore')}>
                    {t({ el: 'Διαβάστε Περισσότερα', en: 'Read More' })}
                  </a>
                </div>
              </div>
            </div>

            <div className="bsingle__post mb-50">
              <div className="bsingle__content quote-post" style={{backgroundImage: `url(${img('img/bg/quote_bg.png')})`}}>
                <div className="meta-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-user"></i>
                        <span {...cp('blog.listing.post6.author')}>{t({ el: 'από Zcube', en: 'by Zcube' })}</span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>
                      <span {...cp('blog.listing.post6.time')}>{t({ el: 'πριν από 19 ώρες', en: '19 hours ago' })}</span>
                    </li>
                  </ul>
                </div>
                <div className="quote-icon">
                  <img src={img('/img/icon/blockquote.png')} alt="" />
                </div>
                <h2>
                  <a href="blog-details" {...cp('blog.listing.post6.title')}>
                    {t({ el: 'We denounce with of righteous one indignation and dislike men.', en: 'We denounce with of righteous one indignation and dislike men.' })}
                  </a>
                </h2>
              </div>
            </div>

            <div className="pagination-wrap mb-50"></div>
          </div>

          <div className="col-lg-4">
            <aside>
              <div className="widget mb-40">
                <div className="widget-title text-center">
                  <h4 {...cp('blog.sidebar.search.title')}>{t({ el: 'Αναζήτηση', en: 'Search' })}</h4>
                </div>
                <div className="slidebar__form">
                  <form action="#">
                    <input 
                      type="text" 
                      placeholder={t({ el: 'Αναζητήστε τη λέξη-κλειδί σας...', en: 'Search your keyword...' })}
                      {...cp('blog.sidebar.search.placeholder')} 
                    />
                    <button><i className="fas fa-search"></i></button>
                  </form>
                </div>
              </div>

              <div className="widget mb-40">
                <div className="widget-title text-center">
                  <h4 {...cp('blog.sidebar.instagram.title')}>{t({ el: 'Instagram', en: 'Instagram' })}</h4>
                </div>
                <ul className="widget-insta-post">
                  <li><a href="#"><img src={img('/img/blog/aside/insta_01.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_02.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_03.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_04.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_05.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_06.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_07.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_08.jpg')} alt="img" /></a></li>
                  <li><a href="#"><img src={img('/img/blog/aside/insta_09.jpg')} alt="img" /></a></li>
                </ul>
              </div>

              <div className="widget mb-40">
                <div className="widget-title text-center">
                  <h4 {...cp('blog.sidebar.social.title')}>{t({ el: 'Ακολουθήστε μας', en: 'Follow Us' })}</h4>
                </div>
                <div className="widget-social text-center">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-wordpress"></i></a>
                </div>
              </div>

              <div className="widget mb-40"></div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}