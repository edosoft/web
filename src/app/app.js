angular.module( 'edosoft', [
    'ui.router',
    'templates-app',
    'templates-common'

])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise( '/home' );

        /*$locationProvider.html5Mode({
          enabled: true,
          requireBase: true
        });*/

        $stateProvider
            .state('home',{
                url:'/home',
                views: {
                   "main": {
                      controller: 'HomeCtrl',
                      templateUrl: 'home/home_es.tpl.html'
                   }
                }
            })
            .state('home_en', {
              url: '/home/en',
              views: {
                "main": {
                  controller:'HomeCtrl',
                  templateUrl: 'home/home_en.tpl.html'
                }
              }
            })
            .state('info', {
                url: '/info',
                views: {
                    "main": {
                        controller: 'InfoCtrl',
                        templateUrl: 'info/info_es.tpl.html'
                    }
                }
            })
            .state('info_en', {
                    url: '/info/en',
                    views: {
                        "main": {
                            controller: 'InfoCtrl',
                            templateUrl: 'info/info_en.tpl.html'
                        }
                    }
            })
            .state('team', {
                url: '/team',
                views: {
                    "main": {
                        controller: 'TeamCtrl',
                        templateUrl: 'team/team_es.tpl.html'
                    }
                }
            })
            .state('team_en', {
                url: '/team/en',
                views: {
                    "main": {
                        controller: 'TeamCtrl',
                        templateUrl: 'team/team_en.tpl.html'
                    }
                }
            })
            .state('services', {
                url: '/services',
                views: {
                    "main": {
                        controller: 'ServicesCtrl',
                        templateUrl: 'services/services_es.tpl.html'
                    }
                }
            })
            .state('services_en', {
                url: '/services/en',
                views: {
                    "main": {
                        controller: 'ServicesCtrl',
                        templateUrl: 'services/services_en.tpl.html'
                    }
                }
            })
            .state('iplusd', {
              url: '/iplusd',
              views: {
                "main": {
                  controller: 'IplusdCtrl',
                  templateUrl: 'iplusd/iplusd_es.tpl.html'
                }
              }
            })
            .state('iplusd_en', {
              url: '/iplusd/en',
              views: {
                "main": {
                  controller: 'IplusdCtrl',
                  templateUrl: 'iplusd/iplusd_en.tpl.html'
                }
              }
            })
            .state('cif', {
              url: '/consultora-factora/',
              views: {
                "main": {
                  controller: 'CifCtrl',
                  templateUrl: 'cif/cif_es.tpl.html'
                }
              }
            })
            .state('cif_en', {
              url: '/consultora-factora/en',
              views: {
                "main": {
                  controller: 'CifCtrl',
                  templateUrl: 'cif/cif_en.tpl.html'
                }
              }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    "main": {
                        controller: 'ContactCtrl',
                        templateUrl: 'contact/contact_es.tpl.html'
                    }
                }
            })
            .state('contact_en', {
                url: '/contact/en',
                views: {
                    "main": {
                        controller: 'ContactCtrl',
                        templateUrl: 'contact/contact_en.tpl.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    "main": {
                        controller: 'AboutCtrl',
                        templateUrl: 'about/about_es.tpl.html'
                    }
                }
            })
            .state('about_en', {
                url: '/about/en',
                views: {
                    "main": {
                        controller: 'AboutCtrl',
                        templateUrl: 'about/about_en.tpl.html'
                    }
                }
            });
  })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location, $window,$state) {
          console.log('AppCtrl',$state.current,$scope.pageTitle);
    })

    .controller('HomeCtrl', function HomeCtrl($state,$scope,$window) {
      $window.scrollTo(0, 0);
      console.log($state.current);

    })

    .controller( 'InfoCtrl', function InfoCtrl ($state,$scope,$window) {
        $window.scrollTo(0, 0);

    })
    .controller( 'ContactCtrl', function ContactCtrl ($state, $scope, $window) {
        $window.scrollTo(0, 0);

    })
    .controller( 'TeamCtrl', function TeamCtrl ($state, $scope, $window ) {
         $window.scrollTo(0, 0);
    })
    .controller( 'CifCtrl', function CifCtrl ($state, $scope, $window ) {
      $window.scrollTo(0, 0);

    })
    .controller( 'ServicesCtrl', function ServicesCtrl ($state, $scope, $window) {
            console.log($state.current);
            $window.scrollTo(0, 0);
            $scope.showgmail =  true;
            $scope.showcalendar =  false;
            $scope.showhangouts =  false;
            $scope.showgplus =  false;
            $scope.showdocs = false;
            $scope.showspreasdsheets = false;
            $scope.showforms = false;
            $scope.showslides = false;
            $scope.showsites = false;
            $scope.showdrives = false;
            $scope.showadmin = false;
            $scope.showkeeps = false;

              // Image click behaviour
              $scope.openInNewWindow = function(id){

                    switch(id) {
                      case 'show-calendar':
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  true;
                        break;
                      case 'show-hangouts':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showhangouts =  true;
                        break;
                      case 'show-gplus':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showgplus =  true;
                        break;
                      case 'show-docs':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showdocs = true;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showgplus =  false;
                        break;
                      case 'show-spreadsheets':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showforms = false;
                        $scope.showspreadsheets = true;
                        break;
                      case 'show-forms':
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showforms = true;
                        break;
                      case 'show-slides':
                        $scope.showslides = true;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreasdsheets = false;
                        $scope.showforms = false;
                        $scope.showsites = false;
                        $scope.showdrives = false;
                        $scope.showadmin = false;
                        $scope.showkeeps = false;
                        break;
                      case 'show-sites':
                        $scope.showsites = true;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreasdsheets = false;
                        $scope.showforms = false;
                        $scope.showslides = false;
                        $scope.showdrives = false;
                        $scope.showadmin = false;
                        $scope.showkeeps = false;
                        break;
                      case 'show-drives':
                        $scope.showdrives = true;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreasdsheets = false;
                        $scope.showforms = false;
                        $scope.showslides = false;
                        $scope.showsites = false;
                        $scope.showadmin = false;
                        $scope.showkeeps = false;
                        break;
                      case 'show-admin':
                        $scope.showadmin = true;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreasdsheets = false;
                        $scope.showforms = false;
                        $scope.showslides = false;
                        $scope.showsites = false;
                        $scope.showdrives = false;
                        $scope.showkeeps = false;
                        break;
                      case 'show-keeps':
                        $scope.showkeeps = true;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreasdsheets = false;
                        $scope.showforms = false;
                        $scope.showslides = false;
                        $scope.showsites = false;
                        $scope.showdrives = false;
                        $scope.showadmin = false;
                        break;
                      default:
                        $scope.showgmail =  true;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreasdsheets = false;
                        $scope.showforms = false;
                        $scope.showslides = false;
                        $scope.showsites = false;
                        $scope.showdrives = false;
                        $scope.showadmin = false;
                        $scope.showkeeps = false;
                    }

              };


    })
    .controller( 'AboutCtrl', function AboutCtrl ($state,$scope,$window) {
    $window.scrollTo(0, 0);

    })
    .controller( 'IplusdCtrl', function IplusdCtrl ($state, $scope, $window) {
    $window.scrollTo(0, 0);
    })

;


