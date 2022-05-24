<!-- -----------------------------------------------------------------------------------

    HTML INDEX
    ===================

    01.ACCUEIL 
    02.CALENDRIER
    03.KANBAN
    04.FORMULAIRE D'INSCRIPTION

------------------------------------------------------------------------------------->


<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    
    <!-- ====== Title ====== -->
    <title>Kanban Réalise</title>
    
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="./index.css"rel='stylesheet' />
    <link href='https://cdn.jsdelivr.net/combine/npm/fullcalendar-scheduler@5.11.0/main.min.css,npm/fullcalendar-scheduler@5.11.0/main.min.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/combine/npm/fullcalendar-scheduler@5.11.0,npm/fullcalendar-scheduler@5.11.0/locales-all.min.js,npm/fullcalendar-scheduler@5.11.0/locales-all.min.js,npm/fullcalendar-scheduler@5.11.0/main.min.js,npm/fullcalendar@5.11.0'></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  

    <!-- ====== FullCalendar ====== -->
    <link href='fullcalendar-5.11.0/lib/main.css' rel='stylesheet' />
   

    <!--====== Favicon Icon ======-->
    <link rel="shortcut icon" href="assets/images/Five-K-Icon-Abstract-Letter-on-transparent.png" type="image/png">
        
    <!--====== Animate CSS ======-->
    <link rel="stylesheet" href="assets/css/animate.css">
        
    <!--====== Magnific Popup CSS ======-->
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
        
    <!--====== Slick CSS ======-->
    <link rel="stylesheet" href="assets/css/slick.css">
        
    <!--====== Line Icons CSS ======-->
    <link rel="stylesheet" href="assets/css/LineIcons.css">
        
    <!--====== Font Awesome CSS ======-->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
        
    <!--====== Bootstrap CSS ======-->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    
    <!--====== Default CSS ======-->
    <link rel="stylesheet" href="assets/css/default.css">
    
    <!--====== Style CSS ======-->
    <link rel="stylesheet" href="assets/css/style.css">

    
</head>

<body>
   
   
   
    <!--====== PRELOADER  START ======-->
    <div class="preloader">
        <div class="loader">
            <div class="ytp-spinner">
                <div class="ytp-spinner-container">
                    <div class="ytp-spinner-rotator">
                        <div class="ytp-spinner-left">
                            <div class="ytp-spinner-circle"></div>
                        </div>
                        <div class="ytp-spinner-right">
                            <div class="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====== PRELOADER  ENDS ======-->








    
    <!-- --------------------------------------------------------------------------------------------------------------------- -->
    <!--====== HEADER  START ======-->
    <header class="header-area">
        <div class="navbar-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/images/realise+logo+banniere-A - 300-100.png" alt="Logo">
                            </a>

 

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ml-auto">
                                   
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#facts">Accueil</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#team">Calendrier</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#blog">Kanban</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="page-scroll" href="#blog">Inscription</a>
                                    </li>
                                </ul>
                            </div> <!-- navbar collapse -->
                            

                            <form class="row gx-3 gy-2 align-items-center">
                                <div class="col-sm-3">
                                  <label class="visually-hidden" for="specificSizeInputName">Name</label>
                                  <input type="text" class="form-control" id="specificSizeInputName" placeholder="Nom">
                                </div>
                                <div class="col-sm-3">
                                  <label class="visually-hidden" for="specificSizeInputGroupUsername">Identifiant</label>
                                  <div class="input-group">
                                    <div class="input-group-text">@</div>
                                    <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Identifiant">
                                  </div>
                                </div>
                               
                                <div class="col-auto">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
                                    <label class="form-check-label" for="autoSizingCheck2">
                                      Se Souvenir
                                    </label>
                                  </div>
                                </div>
                                <div class="col-auto">
                                  <button type="submit" class="btn btn-primary">Go</button>
                                </div>
                              </form>


                            

                        </nav> <!-- navbar -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- navbar area -->
        
        <div id="home" class="header-hero bg_cover" style="background-image: url(assets/images/banner-bg.svg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                                 
                        <div class="header-hero-content text-center">
                            <h3 class="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s"><!--Kanban Réalise--></h3>
                            <h2 class="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s"><!-- --></h2>
                            <p class="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s"><!-- --></p>
                            <a href="#" class="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s"><!--Get Started--></a>
                        </div> <!-- header hero content -->
                    </div>
                </div> <!-- row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="assets/images/realise+logo+banniere-A.png" alt="hero">
                        </div> <!-- header hero image -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
            <div id="particles-1" class="particles"></div>
        </div> <!-- header hero -->

    </header>
    
    <!--====== HEADER  ENDS ======-->
<!-- ---------------------------------------------------------------------------------------------------------- -->
    










    <!--====== BACK TOP TOP  START ======-->

    <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>

    <!--====== BACK TOP TOP  ENDS ======-->   
    


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <!--====== Jquery js ======-->
    <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>
    
    <!--====== Bootstrap js ======-->
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    
    <!--====== Plugins js ======-->
    <script src="assets/js/plugins.js"></script>
    
    <!--====== Slick js ======-->
    <script src="assets/js/slick.min.js"></script>
    
    <!--====== Ajax Contact js ======-->
    <script src="assets/js/ajax-contact.js"></script>
    
    <!--====== Counter Up js ======-->
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    
    <!--====== Magnific Popup js ======-->
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    
    <!--====== Scrolling Nav js ======-->
    <script src="assets/js/jquery.easing.min.js"></script>
    <script src="assets/js/scrolling-nav.js"></script>
    
    <!--====== wow js ======-->
    <script src="assets/js/wow.min.js"></script>
    
    <!--====== Particles js ======-->
    <script src="assets/js/particles.min.js"></script>
    
    <!--====== Main js ======-->
    <script src="assets/js/main.js"></script>
    
    <script src="fullcalendar-5.11.0/lib/main.js"></script>





    
    <!--====== Axios ======-->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js%22%3E"></script>

        
    
   <!-- ====== CalendarJS ====== -->

<script src="index.js" type="module"></script>


</body>

</html>

