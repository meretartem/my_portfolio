module.exports = {
  //функция для открытия сокрытия сайдбара
  Sidebar: {
    Open: async function ScrollSidebarOpen() {
      const sizeAll = await driver.getWindowRect();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeAll.height;
      await browser.pause(1500);
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: 1,
            y: sizeY / 2,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY / 2,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    Close: async function ScrollSidebarClose() {
      const sizeAll = await driver.getWindowRect();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeAll.height;
      await browser.pause(1500);
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY / 2,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: 0,
            y: sizeY / 2,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
  },
  //функция для открытия и закрытия карточки заказа с карты
  MapList: {
    MidOpen: async function ScrollMapOrderMidOpen() {
      const sizeAll = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeTimeline.y;
      const sizeY2 = await sizeAll.height;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY - 25,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY2 * 0.6,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    MidClose: async function ScrollMapOrderMidClose() {
      const sizeAll = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeTimeline.y;
      const sizeY2 = await sizeAll.height;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY - 25,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY2,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    TopOpen: async function ScrollMapOrderTopOpen() {
      const sizeAll = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeTimeline.y;
      const sizeY2 = await sizeAll.height;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY - 25,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY * 0.3,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    TopClose: async function ScrollMapOrderTopClose() {
      const sizeAll = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeTimeline.y;
      const sizeY2 = await sizeAll.height;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY - 25,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY2,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    MidToTop: async function ScrollMapOrderMidToTop() {
      const sizeAll = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeTimeline.y;
      const sizeY2 = await sizeAll.height;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY - 25,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY * 0.2,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    TopToMid: async function ScrollMapOrderTopToMid() {
      const sizeAll = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeTimeline.y;
      const sizeY2 = await sizeAll.height;

      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: sizeX / 2,
            y: sizeY - 25,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: sizeX / 2,
            y: sizeY2 * 0.5,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
  },
  //функция для скролла таймлайна
  MapsTimeline: {
    RightToLeft: async function ScrollMapTimeleftRightToLeft() {
      const sizeScreen = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeScreen.width;
      const sizeY = await sizeTimeline.y;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: (sizeX * 9) / 10,
            y: sizeY + 20,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: 0,
            y: sizeY + 20,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    LeftToRight: async function ScrollMapTimelineRightToLeft() {
      const sizeScreen = await driver.getWindowRect();
      const sizeTimeline = await $(
        "android.widget.HorizontalScrollView"
      ).getLocation();
      const sizeX = await sizeScreen.width;
      const sizeY = await sizeTimeline.y;
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: 100,
            y: sizeY + 20,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: (sizeX * 5) / 6,
            y: sizeY + 20,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
  },
  //функция для скролла карточек заказов
  MapsOrders: {
    RightToLeft: async function ScrollMapOrderMidRightToLeft() {
      const sizeAll = await driver.getWindowRect();
      const sizeScroll = await $$(
        "android.widget.HorizontalScrollView"
      )[1].getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeScroll.y;
      console.log(sizeScroll);
      console.log(sizeX);
      console.log(sizeY);
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: (sizeX * 1) / 2,
            y: sizeY + 20,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: 0,
            y: sizeY + 20,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    LeftToRight: async function ScrollMapOrderMidRightToLeft() {
      const sizeAll = await driver.getWindowRect();
      const sizeScroll = await $$(
        "android.widget.HorizontalScrollView"
      )[1].getLocation();
      const sizeX = await sizeAll.width;
      const sizeY = await sizeScroll.y;
      console.log(sizeScroll);
      console.log(sizeX);
      console.log(sizeY);
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: 100,
            y: sizeY + 20,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: (sizeX * 3) / 4,
            y: sizeY + 20,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
  },
  //функция для скролла по карте
  MapMAin: {
    FromCenter: async function ScrollMainMap(direction) {
      //Параметр с указанием направления direction: up,rup,right,rdown,down,ldown,left,lup
      //Пока что функция только для дефолтного раздела карты, без поднятого меню заказов
      scrollSize = await $("android.widget.HorizontalScrollView").getSize();
      allSize = await $("android.webkit.WebView").getSize();
      centreX = (await allSize.width) / 2;
      centreY = (await (allSize.height - scrollSize.height)) / 2;
      const directions = {
        up: {
          x: 1,
          y: 1.8,
        },
        down: {
          x: 1,
          y: 0.2,
        },
        right: {
          x: 0,
          y: 1,
        },
        left: {
          x: 2,
          y: 1,
        },
        rup: {
          x: 0,
          y: 1.8,
        },
        lup: {
          x: 2,
          y: 1.8,
        },
        rdown: {
          x: 0,
          y: 0.2,
        },
        ldown: {
          x: 2,
          y: 0.2,
        },
      };
      const dirX = directions[direction].x;
      const dirY = directions[direction].y;
      /*
      ТУТ БЫЛ СТАРЫЙ СПОСОБ
      Я БРАЛ ЗА ЦЕНТР ПИН ЗАКАЗА ИЛИ КУРЬЕРА
      positionC = await $("android.widget.Image").getLocation()
      centreX = await positionC.x;
      centreY = await positionC.y;
      */
      //Тут определяется направление, и задаются конечные корды. Старт - центр

      //Тут уже просто тач перформ с нужными координатами
      await browser.touchPerform([
        {
          action: "press",
          options: {
            x: centreX,
            y: centreY,
          },
        },
        {
          action: "wait",
          options: {
            ms: 500,
          },
        },
        {
          action: "moveTo",
          options: {
            x: centreX * dirX,
            y: centreY * dirY,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    },
    //Заготовка под функции для скролла к центру, но наверное оно уже не нужно будет, так как я улучшил предыдущую функцию
    ToCenter: async function ScrollMapOrderMidRightToLeft() {},
  },
  VeticalScroll: async function verticalScroll(direction) {
    const sizeAll = await driver.getWindowRect();
    const sizeX = await sizeAll.width;
    const sizeY = await sizeAll.height;
    if (direction == "up") {
      koefY1 = 0.4;
      koefY2 = 0.9;
    } else {
      koefY1 = 0.9;
      koefY2 = 0.4;
    }
    await browser.touchPerform([
      {
        action: "press",
        options: {
          x: sizeX / 2,
          y: sizeY * koefY1,
        },
      },
      {
        action: "wait",
        options: {
          ms: 500,
        },
      },
      {
        action: "moveTo",
        options: {
          x: sizeX / 2,
          y: sizeY * koefY2,
        },
      },
      {
        action: "release",
        options: {},
      },
    ]);
  },
};
