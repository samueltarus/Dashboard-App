Ext.define('DashboardApp.store.Requests', {
    extend: 'Ext.data.Store',
    alias: 'store.requests',
    storeId: 'requests',
    model: 'DashboardApp.model.Request',
    groupField: 'Status',
    sorters: ['Status','Time'],
    // proxy: {
    //   type: 'rest',
    //   url: 'http://localhost:3000/requests',
    //   reader: {
    //     type: 'json',
    //     rootProperty: 'requests',
    //     totalProperty: 'totalCount'
    //   }
    // }
    data: [
      {
        "IP": "10.128.2.1",
        "Time": "29/11/2017",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.128.2.1",
        "Time": "29/11/2017",
        "URL": "POST /process.php HTTP/1.1",
        "Status": "302"
      },
      {
        "IP": "10.128.2.1",
        "Time": "29/11/2018",
        "URL": "GET /home.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/10/2017",
        "URL": "GET /js/vendor/moment.min.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.130.2.1",
        "Time": "27/11/2017",
        "URL": "GET /bootstrap-3.3.7/js/bootstrap.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.130.2.1",
        "Time": "29/01/2017",
        "URL": "GET /profile.php?user=bala HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.128.2.1",
        "Time": "20/11/2016",
        "URL": "GET /js/jquery.min.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "22/05/2017",
        "URL": "GET /js/chart.min.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "24/11/2017",
        "URL": "GET /edit.php?name=bala HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "23/11/2021",
        "URL": "GET /logout.php HTTP/1.1",
        "Status": "302"
      },
      {
        "IP": "10.131.2.1",
        "Time": "11/11/2017",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.130.2.1",
        "Time": "20/11/2017",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.130.2.1",
        "Time": "29/11/2012",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.130.2.1",
        "Time": "03/04/2013",
        "URL": "GET / HTTP/1.1",
        "Status": "302"
      },
      {
        "IP": "10.130.2.1",
        "Time": "29/01/2017",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.129.2.1",
        "Time": "29/09/2017",
        "URL": "POST /process.php HTTP/1.1",
        "Status": "302"
      },
      {
        "IP": "10.131.0.1",
        "Time": "29/11/2015",
        "URL": "GET /home.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.0.1",
        "Time": "29/11/2017",
        "URL": "GET /contestproblem.php?name=RUET%20OJ%20Server%20Testing%20Contest HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.130.2.1",
        "Time": "29/11/2017",
        "URL": "GET / HTTP/1.1",
        "Status": "302"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET /css/bootstrap.min.css HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.128.2.1",
        "Time": "29/11/2017",
        "URL": "GET /css/font-awesome.min.css HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.0.1",
        "Time": "29/11/2017",
        "URL": "GET /css/normalize.css HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.128.2.1",
        "Time": "19/11/2017",
        "URL": "GET /css/style.css HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.0.1",
        "Time": "29/11/2017",
        "URL": "GET /js/vendor/modernizr-2.8.3.min.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.129.2.1",
        "Time": "29/11/2017",
        "URL": "GET /css/main.css HTTP/1.1",
        "Staus": "200"
      },
      {
        "IP": "10.131.0.1",
        "Time": "29/11/2017",
        "URL": "GET /js/vendor/jquery-1.12.0.min.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.128.2.1",
        "Time": "29/11/2017",
        "URL": "GET /bootstrap-3.3.7/js/bootstrap.min.js HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET /fonts/fontawesome-webfont.woff2?v=4.6.3 HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET / HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET /contestproblem.php?name=RUET%20OJ%20Server%20Testing%20Contest HTTP/1.1",
        "Status": "200"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET /logout.php HTTP/1.1",
        "Status": "302"
      },
      {
        "IP": "10.131.2.1",
        "Time": "29/11/2017",
        "URL": "GET /login.php HTTP/1.1",
        "Status": "200"
      }
    ]
});
