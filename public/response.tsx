export const test_error = {error:{
  code: 103,
  message:
    "you lose",
  errors: [
    {
      message:
        "you lose",
      domain: "global",
      reason: "you lost",
    },
  ],
  status: "LOADING...",
  details: [
    {
      "@type": "type.googleapis.com/google.rpc.ErrorInfo",
      reason: "LOSS_REACHED",
      domain: "#",
      metadata: {
        consumer: "projects/222",
        service: "customsearch",
        quota_limit: "No limits",
        quota_location: "global",
        quota_limit_value: "100",
        quota_metric: "meters",
      },
    },
    {
      "@type": "type.googleapis.com/google.rpc.Help",
      links: [
        {
          description: "Request nothing",
          url: "#",
        },
      ],
    },
  ],
}};

export const test_response = {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - alou",
        totalResults: "5180000",
        searchTerms: "alou",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "a0d1d7ad50cc04e1e",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - alou",
        totalResults: "5180000",
        searchTerms: "alou",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "a0d1d7ad50cc04e1e",
      },
    ],
  },
  context: {
    title: "search",
  },
  searchInformation: {
    searchTime: 0.500086,
    formattedSearchTime: "0.50",
    totalResults: "5180000",
    formattedTotalResults: "5,180,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Alou family - Wikipedia",
      htmlTitle: "\u003cb\u003eAlou\u003c/b\u003e family - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Alou_family",
      displayLink: "en.wikipedia.org",
      snippet:
        "The Rojas family, more commonly known in English-speaking America by their matronym, Alou, is a prominent Major League Baseball family from the Dominican ...",
      htmlSnippet:
        "The Rojas family, more commonly known in English-speaking America by their matronym, \u003cb\u003eAlou\u003c/b\u003e, is a prominent Major League Baseball family from the Dominican&nbsp;...",
      cacheId: "R7gRvzT_5ToJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Alou_family",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/\u003cb\u003eAlou\u003c/b\u003e_family",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "theme-color": "#eaecf0",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Alou family - Wikipedia",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Matty Alou Stats | Baseball-Reference.com",
      htmlTitle:
        "Matty \u003cb\u003eAlou\u003c/b\u003e Stats | Baseball-Reference.com",
      link: "https://www.baseball-reference.com/players/a/alouma01.shtml",
      displayLink: "www.baseball-reference.com",
      snippet:
        "Matty Alou. Positions: Outfielder and First Baseman. Bats: Left • Throws: Left. 5-9, 160lb (175cm, 72kg). Born: December 22, 1938 in Bajos de Haina, ...",
      htmlSnippet:
        "Matty \u003cb\u003eAlou\u003c/b\u003e. Positions: Outfielder and First Baseman. Bats: Left • Throws: Left. 5-9, 160lb (175cm, 72kg). Born: December 22, 1938 in Bajos de Haina,&nbsp;...",
      cacheId: "zcHG0e5V1sEJ",
      formattedUrl:
        "https://www.baseball-reference.com/players/a/alouma01.shtml",
      htmlFormattedUrl:
        "https://www.baseball-reference.com/players/a/\u003cb\u003ealou\u003c/b\u003ema01.shtml",
      pagemap: {
        metatags: [
          {
            "msapplication-tilecolor": "#86081a",
            "generated-by": "build_player_pages.pl",
            "og:image":
              "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://www.baseball-reference.com/req/202208030/images/headshots/3/3d8b257b_sabr.jpg",
            "theme-color": "4d383b",
            "og:type": "Athlete",
            "twitter:card": "summary",
            "og:site_name": "Baseball-Reference.com",
            handheldfriendly: "True",
            "twitter:domain": "Baseball-Reference.com",
            "og:title": "Matty Alou Stats  | Baseball-Reference.com",
            "msapplication-tileimage":
              "https://d2p3bygnnzw9w3.cloudfront.net/req/202207051/favicons/br/ms-tile-144.png",
            "msapplication-navbutton-color": "4d383b",
            "og:description":
              "Career: 31 HR, .307 BA, 427 RBI, OF/1B, 2xAllStar, Pirates/Giants/... 1960-1974, b:L/t:L, 1x BA Leader, born in Dominican Republic. 1938, died 2011",
            "twitter:creator": "@baseball_ref",
            "twitter:image":
              "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://www.baseball-reference.com/req/202208030/images/headshots/3/3d8b257b_sabr.jpg",
            referrer: "unsafe-url",
            "apple-mobile-web-app-status-bar-style": "4d383b",
            "twitter:site": "@baseball_ref",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=2.0",
            "apple-mobile-web-app-capable": "no",
            "mobile-web-app-capable": "yes",
            revised: "14:15:54 14-Aug-2022",
            "og:url":
              "https://www.baseball-reference.com/players/a/alouma01.shtml",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://www.baseball-reference.com/req/202208030/images/headshots/3/3d8b257b_sabr.jpg",
          },
        ],
        listitem: [
          {
            item: "BR Home Page",
            name: "BR Home Page",
            position: "1",
          },
          {
            item: "Major League Players",
            name: "Major League Players",
            position: "2",
          },
          {
            item: "A Listing",
            name: "A Listing",
            position: "3",
          },
          {
            item: "BR Home Page",
            name: "BR Home Page",
            position: "1",
          },
          {
            item: "Major League Players",
            name: "Major League Players",
            position: "2",
          },
          {
            item: "A Listing",
            name: "A Listing",
            position: "3",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Moisés Alou - Wikipedia",
      htmlTitle: "Moisés \u003cb\u003eAlou\u003c/b\u003e - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Mois%C3%A9s_Alou",
      displayLink: "en.wikipedia.org",
      snippet:
        "Moisés Rojas-Alou Beltré is a Dominican-American former outfielder in Major League Baseball who played for 17 seasons in the National League.",
      htmlSnippet:
        "Moisés Rojas-\u003cb\u003eAlou\u003c/b\u003e Beltré is a Dominican-American former outfielder in Major League Baseball who played for 17 seasons in the National League.",
      cacheId: "jj-Hku3wIOMJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Moisés_Alou",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/Moisés_\u003cb\u003eAlou\u003c/b\u003e",
      pagemap: {
        hcard: [
          {
            note: "Moisés Alou",
            bday: "1966-07-03",
            fn: "Moisés Alou",
          },
        ],
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRR4KPu32fDav3Jre2Jmf04ltaJ2WanujyGRsvfE7KIOnU22OPbOFFIwMKz",
            width: "188",
            height: "268",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/a/a5/Moises_Alou_standing.jpg",
            "theme-color": "#eaecf0",
            "og:image:width": "1200",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Moisés Alou - Wikipedia",
            "og:image:height": "1715",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Moises_Alou_standing.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Felipe Alou Stats | Baseball-Reference.com",
      htmlTitle:
        "Felipe \u003cb\u003eAlou\u003c/b\u003e Stats | Baseball-Reference.com",
      link: "https://www.baseball-reference.com/players/a/aloufe01.shtml",
      displayLink: "www.baseball-reference.com",
      snippet:
        "Felipe Alou. Positions: Outfielder and First Baseman. Bats: Right • Throws: Right. 6-0, 195lb (183cm, 88kg). Born: May 12, 1935 in Bajos de Haina, ...",
      htmlSnippet:
        "Felipe \u003cb\u003eAlou\u003c/b\u003e. Positions: Outfielder and First Baseman. Bats: Right • Throws: Right. 6-0, 195lb (183cm, 88kg). Born: May 12, 1935 in Bajos de Haina,&nbsp;...",
      cacheId: "kYb3NkoLmFQJ",
      formattedUrl:
        "https://www.baseball-reference.com/players/a/aloufe01.shtml",
      htmlFormattedUrl:
        "https://www.baseball-reference.com/players/a/\u003cb\u003ealou\u003c/b\u003efe01.shtml",
      pagemap: {
        metatags: [
          {
            "msapplication-tilecolor": "#86081a",
            "generated-by": "build_player_pages.pl",
            "og:image":
              "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://www.baseball-reference.com/req/202208030/images/headshots/b/b79ab182_davis.jpg",
            "theme-color": "4d383b",
            "og:type": "Athlete",
            "twitter:card": "summary",
            "og:site_name": "Baseball-Reference.com",
            handheldfriendly: "True",
            "twitter:domain": "Baseball-Reference.com",
            "og:title": "Felipe Alou Stats  | Baseball-Reference.com",
            "msapplication-tileimage":
              "https://d2p3bygnnzw9w3.cloudfront.net/req/202207051/favicons/br/ms-tile-144.png",
            "msapplication-navbutton-color": "4d383b",
            "og:description":
              "Career: 206 HR, .286 BA, 852 RBI, OF/1B, 3xAllStar, Braves/Giants/... 1958-1974, b:R/t:R, 2x H Leader, born in Dominican Republic. 1935, El Panqué de Haina",
            "twitter:creator": "@baseball_ref",
            "twitter:image":
              "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://www.baseball-reference.com/req/202208030/images/headshots/b/b79ab182_davis.jpg",
            referrer: "unsafe-url",
            "apple-mobile-web-app-status-bar-style": "4d383b",
            "twitter:site": "@baseball_ref",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=2.0",
            "apple-mobile-web-app-capable": "no",
            "mobile-web-app-capable": "yes",
            revised: "14:15:53 14-Aug-2022",
            "og:url":
              "https://www.baseball-reference.com/players/a/aloufe01.shtml",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://www.baseball-reference.com/req/202208030/images/headshots/b/b79ab182_davis.jpg",
          },
        ],
        listitem: [
          {
            item: "BR Home Page",
            name: "BR Home Page",
            position: "1",
          },
          {
            item: "Major League Players",
            name: "Major League Players",
            position: "2",
          },
          {
            item: "A Listing",
            name: "A Listing",
            position: "3",
          },
          {
            item: "BR Home Page",
            name: "BR Home Page",
            position: "1",
          },
          {
            item: "Major League Players",
            name: "Major League Players",
            position: "2",
          },
          {
            item: "A Listing",
            name: "A Listing",
            position: "3",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Alou : Nebraska Press",
      htmlTitle: "\u003cb\u003eAlou\u003c/b\u003e : Nebraska Press",
      link: "https://www.nebraskapress.unl.edu/nebraska/9781496201522",
      displayLink: "www.nebraskapress.unl.edu",
      snippet:
        "Alou played seventeen years in the Major Leagues, accumulating more than two thousand hits and two hundred home runs, and then managed for another fourteen ...",
      htmlSnippet:
        "\u003cb\u003eAlou\u003c/b\u003e played seventeen years in the Major Leagues, accumulating more than two thousand hits and two hundred home runs, and then managed for another fourteen&nbsp;...",
      cacheId: "RrRrTBBAe2YJ",
      formattedUrl: "https://www.nebraskapress.unl.edu/nebraska/9781496201522",
      htmlFormattedUrl:
        "https://www.nebraskapress.unl.edu/nebraska/9781496201522",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwF2CcWtImEboNjau6kfFKRpk0G_R2Jnck2bqW-Mwnrt2izw6E6IxD6BD8",
            width: "183",
            height: "275",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://unebraskapress-us.imgix.net/covers/9781496201522.jpg?auto=format&w=298",
            "og:type": "article",
            "twitter:card": "summary_large_image",
            "twitter:title": "Alou - University of Nebraska Press",
            "og:site_name": "Nebraska Press",
            "og:title": "Alou",
            "og:description":
              "Growing up in a tiny shack in the Dominican Republic, Felipe Alou never dreamed he would be the first man born and raised in his country to play and manage i...",
            "twitter:image":
              "https://unebraskapress-us.imgix.net/covers/9781496201522.jpg?auto=format&w=298",
            "article:modified_time": "2017-01-27T10:29:04+00:00",
            viewport: "width=device-width, initial-scale=1.0, maximum-scale=1",
            "twitter:description":
              "Growing up in a tiny shack in the Dominican Republic, Felipe Alou never dreamed he would be the first man born and raised in his country to play and manage in Major League Baseball—and also...",
            "og:locale": "en_US",
            "og:url":
              "https://www.nebraskapress.unl.edu/nebraska/9781496201522",
          },
        ],
        cse_image: [
          {
            src: "https://unebraskapress-us.imgix.net/covers/9781496201522.jpg?auto=format&w=298",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Alou says he wouldn't have caught Bartman ball in 2003 NLCS",
      htmlTitle:
        "\u003cb\u003eAlou\u003c/b\u003e says he wouldn&#39;t have caught Bartman ball in 2003 NLCS",
      link: "https://www.espn.com/mlb/news/story?id=3324343",
      displayLink: "www.espn.com",
      snippet:
        "Apr 1, 2008 ... Should Steve Bartman be off the hook with Cubs fans? According to Moises Alou, he should be.",
      htmlSnippet:
        "Apr 1, 2008 \u003cb\u003e...\u003c/b\u003e Should Steve Bartman be off the hook with Cubs fans? According to Moises \u003cb\u003eAlou\u003c/b\u003e, he should be.",
      cacheId: "iPZ3DoFrAUQJ",
      formattedUrl: "https://www.espn.com/mlb/news/story?id=3324343",
      htmlFormattedUrl: "https://www.espn.com/mlb/news/story?id=3324343",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3RFVCKDWZrjadxZ32mEgCSqQLa2roAKp__DU5s0TsUQ",
            width: "355",
            height: "142",
          },
        ],
        document: [
          {
            title: "Alou says he wouldn't have caught Bartman ball",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fheadshots%2Fmlb%2Fplayers%2Ffull%2F2360.png",
            "twitter:app:url:iphone":
              "sportscenter://x-callback-url/showStory?uid=3324343",
            "twitter:app:id:googleplay": "com.espn.score_center",
            "apple-itunes-app":
              "app-id=317469184, app-argument=sportscenter://x-callback-url/showStory?uid=3324343",
            "twitter:card": "summary",
            "og:site_name": "ESPN.com",
            "twitter:url": "https://www.espn.com/mlb/news/story?id=3324343",
            "twitter:app:name:googleplay": "ESPN",
            medium: "article",
            "twitter:app:id:iphone": "317469184",
            title:
              "Alou says he wouldn't have caught Bartman ball in 2003 NLCS",
            "og:description":
              "Should Steve Bartman be off the hook with Cubs fans? According to Moises Alou, he should be.",
            "twitter:site": "espn",
            news_keywords: "Chicago Cubs, Moises Alou",
            "article:content_tier": "free",
            "og:type": "article",
            "twitter:title": "Alou says he wouldn't have caught Bartman ball",
            "og:title": "Alou says he wouldn't have caught Bartman ball",
            "fb:pages": "104266592953439",
            "dc.date.issued": "2008-04-01T20:38:41Z",
            referrer: "origin-when-cross-origin",
            "fb:app_id": "116656161708917",
            "twitter:app:url:googleplay":
              "sportscenter://x-callback-url/showStory?uid=3324343",
            viewport: "initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "Should Steve Bartman be off the hook with Cubs fans? According to Moises Alou, he should be.",
            "og:url": "https://www.espn.com/mlb/news/story?id=3324343",
            "twitter:app:name:iphone": "ESPN",
            "article:opinion": "false",
          },
        ],
        cse_image: [{}],
        sitenavigationelement: [
          {
            name: "NFL",
            url: "NFL",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Alou Hotel Boutique, Tijuana – Updated 2022 Prices",
      htmlTitle:
        "\u003cb\u003eAlou\u003c/b\u003e Hotel Boutique, Tijuana – Updated 2022 Prices",
      link: "https://www.booking.com/hotel/mx/alou-boutique.html",
      displayLink: "www.booking.com",
      snippet:
        "Located in Tijuana, within a 14-minute walk of Tijuana Cultural Center and 1.3 miles of El Popo Market, Alou Hotel Boutique has accommodations with a bar ...",
      htmlSnippet:
        "Located in Tijuana, within a 14-minute walk of Tijuana Cultural Center and 1.3 miles of El Popo Market, \u003cb\u003eAlou\u003c/b\u003e Hotel Boutique has accommodations with a bar&nbsp;...",
      formattedUrl: "https://www.booking.com/hotel/mx/alou-boutique.html",
      htmlFormattedUrl:
        "https://www.booking.com/hotel/mx/\u003cb\u003ealou\u003c/b\u003e-boutique.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTK53GDrvO7_39F4ixYmIJR97mpGtA6OcKs6kt69IaDtGZ7IXCXxpHz1LcB",
            width: "192",
            height: "263",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "ff7f0b90ebb93e5bf7c7cafe77640ec1",
            "twitter:app:id:googleplay": "com.booking",
            "twitter:app:url:iphone":
              "https://www.booking.com/hotel/mx/alou-boutique.html?aid=375119",
            "og:image":
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/148059879.jpg?k=d11d0ac7b66d677a36b60be2d6cc28ea8324fd546613fd6dce70a7c1f8c55f3c&o=&hp=1",
            "twitter:card": "summary_large_image",
            "og:image:width": "562",
            "og:site_name": "Booking.com",
            "twitter:app:url:ipad":
              "https://www.booking.com/hotel/mx/alou-boutique.html?aid=375119",
            "al:android:package": "com.booking",
            "twitter:app:name:googleplay": "Booking.com Hotel Reservations",
            "twitter:app:id:iphone": "367003839",
            "al:ios:url":
              "https://www.booking.com/hotel/mx/alou-boutique.html?aid=375119",
            "twitter:creator": "@bookingcom",
            "og:description":
              "Located in Tijuana, within a 14-minute walk of Tijuana Cultural Center and 1.",
            "al:ios:app_store_id": "367003839",
            "twitter:image":
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/148059879.jpg?k=d11d0ac7b66d677a36b60be2d6cc28ea8324fd546613fd6dce70a7c1f8c55f3c&o=&hp=1",
            "twitter:site": "@bookingcom",
            "wb:webmaster": "48970bbca45d28c2",
            "twitter:title": "Alou Hotel Boutique, Tijuana, Mexico",
            "og:type": "website",
            "al:ios:app_name": "Booking.com Hotel Reservations",
            "og:title": "★★★★ Alou Hotel Boutique, Tijuana, Mexico",
            "twitter:app:id:ipad": "367003839",
            "og:image:height": "768",
            "fb:pages":
              "131840030178250, 1425349334428496, 117615518393985, 1565844503706287, 517612321758712, 1668799180037291, 265097377176252, 1643712662515912, 303492549842824, 1638321783047271, 809709019119342, 959185470826086, 217466488652137, 641365839348517, 203741606405114",
            "al:android:url":
              "https://www.booking.com/hotel/mx/alou-boutique.html?aid=375119",
            referrer: "origin",
            "twitter:app:url:googleplay":
              "https://www.booking.com/hotel/mx/alou-boutique.html?aid=375119",
            "fb:app_id": "145362478954725",
            "booking-verification":
              "UmFuZG9tSVYSnEV-X7cTI-fLAXeXjfSFI1mH9m5vda68N7JtwXL7LVQ65c1vQShei7Ct248uwSG0448D7gRNKebgd3PGAgY3hs8vJ5DUB-oLvP5VPy9iCxAX1aoguqBusYLE5hFUCf6oxp_c9GFJpP3a-twpDws9uMn3GwHERJs2J0_mTPCfaEAqepEsNMhFu0DgX1w6xIPe1qksUeyPa6srE9Q7VyxY6yJnpw4cqxUbw1nRXfL50Cqar65i9MgyT--6_FKQNkuDZwQZwU53fwS3KfKvgDFL8heUiO77vTZsButpUNkiO7L3Ms7Mnk4kh-NiH9MFEN4Yi0ehaFWCSeW4vrrIAbn1A8lBVMH86xVFBioXjgU3G8SOhwth4mAv",
            "twitter:app:name:ipad":
              "Booking.com Hotel Reservations Worldwide & Hotel Deals",
            "twitter:description":
              "Located in Tijuana, within a 14-minute walk of Tijuana Cultural Center and 1.",
            "og:locale": "en_US",
            "og:url": "https://www.booking.com/hotel/mx/alou-boutique.html",
            "al:android:app_name": "Booking.com Hotel Reservation",
          },
        ],
        cse_image: [
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/148059879.jpg?k=d11d0ac7b66d677a36b60be2d6cc28ea8324fd546613fd6dce70a7c1f8c55f3c&o=&hp=1",
          },
        ],
        listitem: [
          {
            item: "Home",
            name: "Booking.com",
            position: "1",
          },
          {
            item: "Mexico",
            name: "Hotels in Mexico",
            position: "2",
          },
          {
            item: "Baja California",
            name: "Hotels in Baja California",
            position: "3",
          },
          {
            item: "Tijuana",
            name: "Hotels in Tijuana",
            position: "4",
          },
          {
            item: "Alou Hotel Boutique (Hotel), Tijuana (Mexico) Deals",
            name: "Alou Hotel Boutique (Hotel), Tijuana (Mexico) Deals",
            position: "5",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Moises Alou Stats, News, Bio | ESPN",
      htmlTitle:
        "Moises \u003cb\u003eAlou\u003c/b\u003e Stats, News, Bio | ESPN",
      link: "https://www.espn.com/mlb/player/_/id/2360/moises-alou",
      displayLink: "www.espn.com",
      snippet:
        "Get the latest news, stats, videos, highlights and more about left fielder Moises Alou on ESPN.",
      htmlSnippet:
        "Get the latest news, stats, videos, highlights and more about left fielder Moises \u003cb\u003eAlou\u003c/b\u003e on ESPN.",
      cacheId: "3TTSP_lSg5oJ",
      formattedUrl: "https://www.espn.com/mlb/player/_/id/2360/moises-alou",
      htmlFormattedUrl:
        "https://www.espn.com/mlb/player/_/id/2360/moises-\u003cb\u003ealou\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFX1vEbVcOgOgVORwXuV_RdCE0e-662WWEJic7NVH7r41Hgwsv9VDGIiMK",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png",
            "twitter:app:id:googleplay": "com.espn.score_center",
            "og:image:width": "500",
            "og:type": "athlete",
            "twitter:title": "Moises Alou Stats, News, Bio | ESPN",
            "twitter:card": "summary",
            "og:site_name": "ESPN",
            "twitter:url":
              "https://www.espn.com/mlb/player/_/id/2360/moises-alou",
            "og:title": "Moises Alou Stats, News, Bio | ESPN",
            "og:image:height": "500",
            "twitter:app:name:googleplay": "ESPN",
            medium: "website",
            "twitter:app:id:iphone": "317469184",
            title: "Moises Alou Stats, News, Bio | ESPN",
            "og:description":
              "Get the latest news, stats, videos, highlights and more about left fielder Moises Alou on ESPN.",
            "twitter:image":
              "https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png",
            "fb:app_id": "116656161708917",
            "twitter:site": "espn",
            viewport: "initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "Get the latest news, stats, videos, highlights and more about left fielder Moises Alou on ESPN.",
            "og:locale": "en_US",
            "og:url": "https://www.espn.com/mlb/player/_/id/2360/moises-alou",
            "twitter:app:name:iphone": "ESPN",
          },
        ],
        cse_image: [
          {
            src: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Moises Alou Stats, Fantasy & News | MLB.com",
      htmlTitle:
        "Moises \u003cb\u003eAlou\u003c/b\u003e Stats, Fantasy &amp; News | MLB.com",
      link: "https://www.mlb.com/player/moises-alou-110189",
      displayLink: "www.mlb.com",
      snippet:
        "Moises Alou Bio. Fullname: Moises Rojas Alou; Born: 7/03/1966 in Atlanta, GA; Draft: 1986, Pittsburgh Pirates, Round: 1, Overall Pick: 2; College: Canada ...",
      htmlSnippet:
        "Moises \u003cb\u003eAlou\u003c/b\u003e Bio. Fullname: Moises Rojas \u003cb\u003eAlou\u003c/b\u003e; Born: 7/03/1966 in Atlanta, GA; Draft: 1986, Pittsburgh Pirates, Round: 1, Overall Pick: 2; College: Canada&nbsp;...",
      cacheId: "lPSrpmrMXAEJ",
      formattedUrl: "https://www.mlb.com/player/moises-alou-110189",
      htmlFormattedUrl:
        "https://www.mlb.com/player/moises-\u003cb\u003ealou\u003c/b\u003e-110189",
      pagemap: {
        metatags: [
          {
            sectionassetsuri:
              "//builds.mlbstatic.com/mlb.com/sections/player/builds/df2559fe24a459b31e4daac571534cc735817b13_1654703426",
            "og:image":
              "https://www.mlbstatic.com/team-logos/share/mlb.jpg?v=2",
            "twitter:card": "summary_large_image",
            "og:site_name": "MLB.com",
            timezone: "America/New_York",
            "apple-mobile-web-app-title": "MLB.com",
            fliptimezoneoffset: "-04:00",
            sectionbuildversion:
              "df2559fe24a459b31e4daac571534cc735817b13_1654703426",
            app_group: "bdata",
            locale: "en",
            "og:description": "Moises Alou Stats, Fantasy & News",
            "app-view": "web",
            doubleclick_adunit: "mlb.mlb",
            "twitter:site": "@mlb",
            omniturepagename: "player",
            omniturepageprops:
              "%7B%22pageName%22%3A%22player%22%2C%22registrationPoints%22%3A%22player%22%7D",
            zone: "us-east4-b",
            page_name: "Major League Baseball",
            club: "mlb",
            server_url: "https://www.mlb.com",
            lang: "en",
            fliptime: "10:00",
            uistatic_url: "//builds.mlbstatic.com/mlb.com",
            page_section: "player",
            "og:type": "website",
            siteassetsuri:
              "//builds.mlbstatic.com/mlb.com/builds/site-core/1652119155175/dist",
            sitecorebuildversiondirectory: "1652119155175/dist/",
            "og:title": "Moises Alou Stats, Fantasy & News",
            secure_url: "https://www.mlb.com",
            game_data_url: "https://statsapi.mlb.com",
            servertime: "2022-08-20T20:56:31-04:00",
            env: "production",
            "fb:pages": "5768707450",
            "fb:app_id": "5768707450",
            bamcontent_client_url: "https://content.mlb.com",
            sitecorebuildpath: "//builds.mlbstatic.com/mlb.com/builds",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            build: "true",
            header: "true",
            "page-tags": "{}",
            "og:url": "https://www.mlb.com/player/moises-alou-110189",
            region: "us-east4",
          },
        ],
        cse_image: [
          {
            src: "https://www.mlbstatic.com/team-logos/share/mlb.jpg?v=2",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Former MLB outfielder Matty Alou dies at age 72",
      htmlTitle:
        "Former MLB outfielder Matty \u003cb\u003eAlou\u003c/b\u003e dies at age 72",
      link: "https://www.espn.com/mlb/story/_/id/7186392/former-mlb-outfielder-matty-alou-dies-age-72",
      displayLink: "www.espn.com",
      snippet:
        "Nov 3, 2011 ... Former major league outfielder Matty Alou died on Thursday in Santo Domingo, Dominican Republic.",
      htmlSnippet:
        "Nov 3, 2011 \u003cb\u003e...\u003c/b\u003e Former major league outfielder Matty \u003cb\u003eAlou\u003c/b\u003e died on Thursday in Santo Domingo, Dominican Republic.",
      cacheId: "jH3EkwCKr34J",
      formattedUrl:
        "https://www.espn.com/.../former-mlb-outfielder-matty-alou-dies-age-72",
      htmlFormattedUrl:
        "https://www.espn.com/.../former-mlb-outfielder-matty-\u003cb\u003ealou\u003c/b\u003e-dies-age-72",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLQuc0EX17l2rttnTmuQdEZocl9_ckmcZCwKoIzVdz1qf4iWguQy8qIVPl",
            width: "225",
            height: "225",
          },
        ],
        document: [
          {
            title: "Former MLB outfielder Matty Alou dies at age 72",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fmlb%2F500%2Fsd.png",
            "twitter:app:url:iphone":
              "sportscenter://x-callback-url/showStory?uid=7186392",
            "twitter:app:id:googleplay": "com.espn.score_center",
            "apple-itunes-app":
              "app-id=317469184, app-argument=sportscenter://x-callback-url/showStory?uid=7186392",
            "twitter:card": "summary",
            "og:site_name": "ESPN.com",
            "twitter:url":
              "https://www.espn.com/mlb/story/_/id/7186392/former-mlb-outfielder-matty-alou-dies-age-72",
            "twitter:app:name:googleplay": "ESPN",
            medium: "article",
            "twitter:app:id:iphone": "317469184",
            title: "Former MLB outfielder Matty Alou dies at age 72",
            "og:description":
              "Former major league outfielder Matty Alou died on Thursday in Santo Domingo, Dominican Republic.",
            "twitter:site": "espn",
            news_keywords:
              "Matty Alou, Dominican baseball, Alou brothers, San Francisco Giants, MLB, Pittsburgh Pirates, St. Louis Cardinals, Oakland Athletics, New York Yankees, San Diego Padres",
            "article:content_tier": "free",
            "og:type": "article",
            "twitter:title": "Former MLB outfielder Matty Alou dies at age 72",
            "og:title": "Former MLB outfielder Matty Alou dies at age 72",
            "fb:pages": "104266592953439",
            "dc.date.issued": "2011-11-03T19:11:38Z",
            referrer: "origin-when-cross-origin",
            "fb:app_id": "116656161708917",
            "twitter:app:url:googleplay":
              "sportscenter://x-callback-url/showStory?uid=7186392",
            viewport: "initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "Former major league outfielder Matty Alou died on Thursday in Santo Domingo, Dominican Republic.",
            "og:url":
              "https://www.espn.com/mlb/story/_/id/7186392/former-mlb-outfielder-matty-alou-dies-age-72",
            "twitter:app:name:iphone": "ESPN",
            "article:opinion": "false",
          },
        ],
        cse_image: [
          {
            src: "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fmlb%2F500%2Fsd.png",
          },
        ],
        sitenavigationelement: [
          {
            name: "NFL",
            url: "NFL",
          },
        ],
      },
    },
  ],
};
  