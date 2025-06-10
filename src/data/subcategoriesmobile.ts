// این فایل به صورت خودکار تولید شده است
// ⚠️ لطفاً مستقیماً ویرایش نکنید

export interface MobileMenuItem {
  id: number;
  item: string;
  url: string | null;
  image: string | null;
}

export interface MobileMenuChild {
  id: number;
  title: string;
  url: string;
  items?: MobileMenuItem[];
}

export interface MobileMenuCategory {
  id: number;
  'main-title': string;
  generalLink: string;
  url: string;
  image: string;
  children: MobileMenuChild[];
}

export const mobileMenu: MobileMenuCategory[] = [
  {
    "id": 1,
    "main-title": "موبایل",
    "generalLink": "همه محصولات موبایل",
    "url": "/search/category-mobile-phone/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 14,
        "title": "برندهای مختلف گوشی موبایل",
        "url": "/landing/mobile_brands/",
        "items": [
          {
            "id": 14001,
            "item": "گوشی آیفون",
            "url": "/search/category-mobile-phone/apple/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/c5214865679ce797bd3c1866936fe62879fd2759_1693213232.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14002,
            "item": "گوشی سامسونگ",
            "url": "/search/category-mobile-phone/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/07d6645f6144fd0b58d3f9b642fd27ee138d9497_1692602649.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14003,
            "item": "گوشی شیائومی",
            "url": "/search/category-mobile-phone/xiaomi/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/b44c58cbfb9a855929a298da9cd03e705906322c_1693213244.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14004,
            "item": "گوشی نوکیا",
            "url": "/search/category-mobile-phone/nokia/?sort=7",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/161000bf6136a71591ac689a9fb533c579598a1b_1692602720.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14005,
            "item": "گوشی ریلمی",
            "url": "/search/category-mobile-phone/realme/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/65f2ac2a557ab1a7453d7e137f9bea3e462d8055_1692602856.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14006,
            "item": "گوشی آنر",
            "url": "/search/category-mobile-phone/honor/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/58b5f060252f11f16c8091d2e6f36ed2987894c6_1741776702.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14007,
            "item": "گوشی ناتینگ فون",
            "url": "/search/category-mobile-phone/nothing/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/bcf3794aec64797c815fec67050c7f6e4843e128_1692602886.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14008,
            "item": "گوشی وکال",
            "url": "/search/category-mobile-phone/vocal/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/101b010811ccde2e0ac221c091998929d6459c8b_1732964575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14009,
            "item": "گوشی ردتون",
            "url": "/search/category-mobile-phone/redtone/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/161e87756ea11212ff62b3bc2ddf51184085717e_1740907105.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 14010,
            "item": "گوشی تی سی ال",
            "url": "/search/category-mobile-phone/TCL/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/b367750f099bf58feea114b839954bc64b51f698_1727771555.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          }
        ]
      },
      {
        "id": 1172,
        "title": "برندهای برتر",
        "url": "/search/category-mobile-phone/",
        "items": [
          {
            "id": 1172001,
            "item": "سامسونگ",
            "url": "/brand-landing/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9715e1949930b7d020a8fc0f8cd47c557eaf425b_1726389942.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1172002,
            "item": "اپل",
            "url": "/landing/apple-shop/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2415356d914c7ad2a6caf98affc7f5cb69c0c92b_1727852710.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1172003,
            "item": "ردتون",
            "url": "/brand-landing/redtone/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/b4757b71d82c8d2f36a8d391b301c9d1cb84e99d_1745923945.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1172004,
            "item": "آنر",
            "url": "/brand-landing/honor/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d3d57e056b7f19ab90708496b7f91fa16b423a57_1697291771.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1172005,
            "item": "ریلمی",
            "url": "/brand-landing/realme/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ca9662b585d4704ecd6562950a84340204230acd_1695628553.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1172006,
            "item": "اچ ام دی",
            "url": "/search/category-mobile-phone/hmd-mobile/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5c98ced1b7dccaa40ae321b54f7f1d9fd21ad5e9_1739699033.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 15,
        "title": "گوشی براساس قیمت",
        "url": "/landing/mobile_prices/",
        "items": [
          {
            "id": 15001,
            "item": "گوشی ارزان",
            "url": "/search/facet/category-mobile-phone/division-economic/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c03f9cc5da37b47bcba99bdb4e84b382f3c2c4b0_1697527753.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 15002,
            "item": "گوشی موبایل قسطی",
            "url": "/credit/mobile/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6242eb1ff9c8d5d449b34dcaadad1b5564f7f37d_1727610860.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 15003,
            "item": "گوشی تا 2 میلیون تومان",
            "url": "/search/category-mobile-phone/product-list/?price%5bmax%5d=20000000&price%5bmin%5d=0",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/721e8b4b1d8a6fad4f5f256b8407b49b426be1f4_1692610608.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 15004,
            "item": "گوشی تا 5 میلیون تومان",
            "url": "/search/category-mobile-phone/product-list/?price%5bmax%5d=50000000&price%5bmin%5d=0",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/d815a5c8ab2f37652d5f5e19d0c11cce140a77db_1692610616.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 15005,
            "item": "گوشی تا 7 میلیون تومان",
            "url": "/search/category-mobile-phone/product-list/?price%5bmax%5d=70000000&price%5bmin%5d=0",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/92844548e2d6455fa143894dabc14b093f82aadf_1692610626.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 15006,
            "item": "گوشی تا 15 میلیون تومان",
            "url": "/search/category-mobile-phone/product-list/?price%5bmax%5d=150000000&price%5bmin%5d=0",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/a637ee67886d35061dce1b4a15cd4377b9df2d5b_1692610639.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 15007,
            "item": "گوشی بالای 15 میلیون تومان",
            "url": "/search/category-mobile-phone/product-list/?price%5bmax%5d=689890000&price%5bmin%5d=150000000",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/c7e9b9dd71936e1a5d14d212a825805be073a0d7_1692610647.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          }
        ]
      },
      {
        "id": 18,
        "title": "گوشی براساس عملکرد",
        "url": "/landing/mobile_features/",
        "items": [
          {
            "id": 18001,
            "item": "گوشی گیمینگ",
            "url": "/search/facet/category-mobile-phone/special-features-for-gaming/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c8043138efd6be653515f4947c88752ebd2fc28a_1725959739.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18002,
            "item": "گوشی 5G",
            "url": "/search/facet/category-mobile-phone/communication-networks-5g/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0281529240de39750ddde0de95c9ebc89427218e_1725960394.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18003,
            "item": "گوشی دکمه‌ای",
            "url": "/search/category-mobile-phone/product-list/?attributes%5B7348%5D%5B0%5D=31344",
            "image": "https://dkstatics-public.digikala.com/digikala-products/00c317e7b17ef1c17cd3c386dedf080f75a6c966_1656408147.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18004,
            "item": "گوشی ضد آب",
            "url": "/search/category-mobile-phone/product-list/?attributes%5B7348%5D%5B0%5D=31349",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2699d74e3bf1b7db530bfe4ce737f5591c36fb39_1725969492.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18005,
            "item": "گوشی مناسب عکاسی",
            "url": "/search/category-mobile-phone/product-list/?attributes%5B7348%5D%5B0%5D=31352&sort=7",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1f8bb150b142112d1f7560d5313d1d73ca67aa28_1677060264.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18006,
            "item": "گوشی میان رده",
            "url": "/search/facet/category-mobile-phone/division-mid-range/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1669120331.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18007,
            "item": "گوشی دانش آموزی",
            "url": "/search/category-mobile-phone/product-list/?price%5bmax%5d=60000000&price%5bmin%5d=0&sort=4",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ddec30308d75798da898e31252e9f44329758dd5_1682501482.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18008,
            "item": "گوشی پرچمدار",
            "url": "/search/facet/category-mobile-phone/division-flagship/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 18009,
            "item": "گوشی دو سیمکارت",
            "url": "/search/facet/category-mobile-phone/sim-card-number-two/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e55cef74b85f25bacfc7b7f388653cf2be09bff0_1736948782.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 16,
        "title": "گوشی براساس حافظه داخلی",
        "url": "/landing/mobile_ram/",
        "items": [
          {
            "id": 16001,
            "item": "گوشی 64 گیگابایت",
            "url": "/search/facet/category-mobile-phone/internal-memory-64-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/746688cbb017d470e8b3deec9454c77d882c45ef_1692691806.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 16002,
            "item": "گوشی 128 گیگابایت",
            "url": "/search/facet/category-mobile-phone/internal-memory-128-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/259e06ac9e58e541fb86bd4e3fac2c2fe58144a3_1692691838.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 16003,
            "item": "گوشی 256 گیگابایت",
            "url": "/search/facet/category-mobile-phone/internal-memory-256-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/5b757749dcc6433d75d7f01da01f455704419637_1692692309.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 16004,
            "item": "گوشی 512 گیگابایت",
            "url": "/search/facet/category-mobile-phone/memory-512-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/f291cc18d53a8db92ee967cd790a979db5b714db_1692691955.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 16005,
            "item": "گوشی یک ترابایت",
            "url": "/search/facet/category-mobile-phone/internal-memory-1-tb/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727277296.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 17,
        "title": "رزولوشن عکس",
        "url": "/landing/mobile_camera/",
        "items": [
          {
            "id": 17001,
            "item": "گوشی با دوربین 48 مگاپیکسل",
            "url": "/search/facet/category-mobile-phone/main-camera-resolution-48-megapixels/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/a7ce6112d801146915c7a6173760e186e47366b8_1692692202.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 17002,
            "item": "گوشی با دوربین 50 مگاپیکسل",
            "url": "/search/facet/category-mobile-phone/main-camera-resolution-50-megapixels/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0a5e74229cb456ce6689a834c4ba1e566fc03937_1727520302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 17003,
            "item": "گوشی با دوربین 64 مگاپیکسل",
            "url": "/search/facet/category-mobile-phone/main-camera-resolution-64-megapixels/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/5321da2322f18f89d1658f125359c7d671ad7bd6_1692692232.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 17004,
            "item": "گوشی با دوربین 108 مگاپیکسل",
            "url": "/search/facet/category-mobile-phone/main-camera-resolution-108-megapixels/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/0340dd1adac0c1b20e7c2baff79454a44d20b1c2_1692692252.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          }
        ]
      },
      {
        "id": 676,
        "title": "لوازم جانبی موبایل",
        "url": "/search/category-mobile-accessories/",
        "items": [
          {
            "id": 676001,
            "item": "شارژر گوشی",
            "url": "/search/category-car-charger/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e3e4e233808ebc7d4a5ab6508b80f746d669fe89_1664211010.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676002,
            "item": "شارژر وایرلس",
            "url": "/search/facet/category-car-charger/communication-ports-wireless/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/14b4e07f582f5b43b330b48d52e7d7a729e97a65_1631553477.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676003,
            "item": "قاب و کاور گوشی",
            "url": "/search/category-cell-phone-pouch-cover/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1f5b8a173665f59a27b906ed96ac5ffc58a67075_1597687631.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676004,
            "item": "گلس گوشی",
            "url": "/search/category-cell-phone-screen-guard/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/29cf7c50d963021a5c300f1f9dbb472fec4e5f00_1660037275.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676005,
            "item": "هولدر گوشی موبایل",
            "url": "/search/category-cell-phone-holder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a1f67ed5aa04de5b5aad81d896db66a7d4c34849_1688535806.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676006,
            "item": "کابل شارژ و مبدل",
            "url": "/search/category-cell-phone-data-cable/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/36a4a8d0755c0c75c27f1e1a16fa59adce23e8a3_1605125553.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676007,
            "item": "پاوربانک (شارژر همراه)",
            "url": "/search/category-power-bank/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a77483b1f41ec2b5cb925afb8d693ea956ab6f5d_1687390272.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 676008,
            "item": "مونوپاد",
            "url": "/tags/monopod/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2431730.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 657,
        "title": "تبلت",
        "url": "/search/category-tablet/"
      },
      {
        "id": 664,
        "title": "هدفون",
        "url": "/search/category-headphone/",
        "items": [
          {
            "id": 664001,
            "item": "هدفون بی سیم",
            "url": "/search/category-headphone/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664002,
            "item": "هدفون اپل (ایرپاد)",
            "url": "/search/category-headphone/apple/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0d022d11cb7b5b1544a7132df4e9dfe9354ac195_1745825005.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664003,
            "item": "هدفون بیتس",
            "url": "/search/category-headphone/beats/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112214613.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664004,
            "item": "هدفون سونی",
            "url": "/search/category-headphone/sony/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e04c28634f087684f17c8f833ee09a9b52c37e6a_1745760223.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664005,
            "item": "هدفون سامسونگ (ایربادز)",
            "url": "/search/category-headphone/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fdf44defacc3f6ae130ee3deeb49cf8dd63f9c62_1745760220.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664006,
            "item": "هدفون شیائومی",
            "url": "/search/category-headphone/xiaomi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c8845fe3c6b10f5b2e0aaf738fe712b6925b25c5_1664474021.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664007,
            "item": "هدفون جی بی ال",
            "url": "/search/category-headphone/jbl/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7c7846eb8d3a91d54dec794f70059580696f8683_1662719929.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 664008,
            "item": "هدفون انکر",
            "url": "/search/category-headphone/anker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/487620e2936e1dd07238849a058fe472da39c1a5_1745824997.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 672,
        "title": "ساعت و مچ بند هوشمند",
        "url": "/search/category-wearable-gadget/",
        "items": [
          {
            "id": 672001,
            "item": "ساعت هوشمند سامسونگ",
            "url": "/search/category-smart-watch/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8ba51b222283d9066e8155d0f6ad18a9d958ec45_1689581628.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 672002,
            "item": "ساعت هوشمند شیائومی",
            "url": "/search/category-smart-watch/xiaomi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c4d5c3fcc916fde3cb5295b7f7ae4caebcb402dc_1656933351.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1169,
        "title": "اپل واچ",
        "url": "/search/category-smart-watch/apple/",
        "items": [
          {
            "id": 1169001,
            "item": "اپل واچ اولترا ۲",
            "url": "/tags/apple-watch-ultra-2/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3418e9fa8930eb8151bb3b2ad8d4b3dfa7ee3a10_1739285181.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1169002,
            "item": "اپل واچ ۱۰",
            "url": "/tags/apple-watch-10/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1169003,
            "item": "اپل واچ SE",
            "url": "/tags/apple-watch-se/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/344cf555f617dc3df15f7e664531681df8aa9e42_1747410441.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 683,
        "title": "داغ ترین‌ها",
        "url": "/search/category-mobile-phone/product-list/?sort=7",
        "items": [
          {
            "id": 683001,
            "item": "گوشی S25 سامسونگ",
            "url": "/tags/samsung-s25/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9e8681750789d9d15cc4680c1d91b237c49919d0_1738145172.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683002,
            "item": "آیفون ۱۶",
            "url": "/tags/iphone-16/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b5e5c4b303d74d9d0a5328dd1d24f038517b58d6_1731505174.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683003,
            "item": "آیفون ۱۶ پرو",
            "url": "/tags/iphone-16-pro/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cc76759800e55f083c5b68361bb87b6e08f4719b_1744103910.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683004,
            "item": "آیفون ۱۶ پرو مکس",
            "url": "/tags/iphone-16-pro-max/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3d63a44c590922d0e0c979621933e3be67d384de_1732005552.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683005,
            "item": "شیائومی نوت ۱۴",
            "url": "/product/dkp-17580036/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-note-14-4g-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-8-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683006,
            "item": "ردمی نوت ۱۴ پرو",
            "url": "/product/dkp-17588414/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-note-14-pro-4g-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-8-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f342fb46a5160efe4698f4582d33e89850447363_1740843590.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683007,
            "item": "ردمی نوت ۱۴ پرو پلاس",
            "url": "/product/dkp-17591652/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-note-14-pro-plus-5g-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-512-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-12-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA",
            "image": "https://dkstatics-public.digikala.com/digikala-products/94f47ca3174d6b449d8bd69a354d321ac0f2fb8d_1738135885.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683008,
            "item": "شارژر فندکی",
            "url": "/search/facet/category-car-charger/car-charger/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e38b246ef16003fb28a7785522ed4e840c4ed5f9_1699212832.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 683009,
            "item": "هولدر گردنی",
            "url": "/tags/neck-phone-holder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/93386affdf3316ae9fd4983e3af2d3876e3fc735_1718721170.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "main-title": "کالای دیجیتال",
    "generalLink": "همه محصولات کالای دیجیتال",
    "url": "/main/electronic-devices/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 68,
        "title": "کنسول بازی",
        "url": "/search/category-game-console/",
        "items": [
          {
            "id": 68001,
            "item": "ps5",
            "url": "/search/category-station-gaming-consoles/sony/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3dd1c2624adbcd6e96da177f7327cf409b2f7168_1610283135.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 68002,
            "item": "ps5 slim",
            "url": "/tags/slim-ps5/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1d528607d530a07042e4dfe0df8f0f4086478989_1701611579.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 68003,
            "item": "ps4",
            "url": "/search/category-station-gaming-consoles/?brands%5B0%5D=1&has_selling_stock=1&types%5B0%5D=22124",
            "image": "https://dkstatics-public.digikala.com/digikala-products/454cdccc4c743eec28c1a0cbb99c6d41e82b0f68_1681646201.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 68004,
            "item": "xbox",
            "url": "/search/category-station-gaming-consoles/microsoft/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c3b20efe3b595c69397b9983e546e9a0837d37d7_1744468041.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 68005,
            "item": "gamestick",
            "url": "/tags/gamestick/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/44580858b09b5285eac66fc6dfbb2e453dce0e4b_1713653397.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 68006,
            "item": "nintendo switch",
            "url": "/brand/nintendo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/120544309.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 51,
        "title": "وسایل گیمینگ",
        "url": "/search/category-gaming-accessories/",
        "items": [
          {
            "id": 51001,
            "item": "ست گیمینگ",
            "url": "/tags/gaming-set/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8a577a5d2bacdd6c1cc75b91253b9bf305f7135a_1723415349.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51002,
            "item": "دسته بازی",
            "url": "/search/category-gamepad/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/af2930ae6afde927196d1be53f602821b6611325_1692624271.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51003,
            "item": "بازی ps5",
            "url": "/search/facet/category-home-console-games/compatible-with-consoles-playstation-5/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/caafe4918b95ba0b76235f32fd5b6e1d965531a7_1696940479.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51004,
            "item": "بازی ps4",
            "url": "/search/facet/category-home-console-games/compatible-with-consoles-playstation-4/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5995382563aad22fd6bf1cf33ae0fb26d0169573_1695814559.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51005,
            "item": "بازی ایکس باکس ۳۶۰",
            "url": "/search/facet/category-home-console-games/compatible-with-consoles-xbox-360/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e75a22b9cfcffc4b78e1026561af84170b78cc72_1638265919.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51006,
            "item": "بازی pc",
            "url": "/search/category-pc-game/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/049f8008c1c06ef76006a645798727a769bf8cda_1729246907.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51007,
            "item": "دیسک های بازی",
            "url": "/search/category-home-console-games/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1dfcb17d2082532e5a5900e9d8ffedca44064701_1630511198.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51008,
            "item": "فرمان بازی",
            "url": "/tags/racing-wheel/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cc1811b8f3522e2d3c6ccaff3b69023b6778c8db_1661876092.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 51009,
            "item": "صندلی گیمینگ",
            "url": "/tags/gaming-chair/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/78182e1add97db59e3737ba512e960267d8aba62_1676200207.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 70,
        "title": "کامپیوتر",
        "url": "/search/category-computer-parts/",
        "items": [
          {
            "id": 70001,
            "item": "all in one",
            "url": "/search/category-all-in-pc/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/332ab75b7e996cb8841359b68ff5e49bd3ad3d01_1697283822.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 70002,
            "item": "mini pc",
            "url": "/search/category-mini-pc/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/113263594.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 70003,
            "item": "قلم نوری",
            "url": "/search/category-digital-pen/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ac21f37edd929a6b8afadc0108cf04a9354ce3bc_1686647457.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 70004,
            "item": "رم ریدر",
            "url": "/search/category-ram-reader/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/98717a6fefcb20cac1be502357065c3c73ef5735_1641209392.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 70005,
            "item": "ماوس پد",
            "url": "/search/category-mouse-pad/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7978a28f6b61632ea949538ec038e23bcb1113a0_1664789763.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 70006,
            "item": "کیس اسمبل شده",
            "url": "/search/category-assembled-cases/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bf69276cd2e9693cd402cac9dadba0d3fbb18d24_1684491746.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 52,
        "title": "کیبورد",
        "url": "/search/category-keyboard/"
      },
      {
        "id": 54,
        "title": "کیس کامپیوتر",
        "url": "/search/category-computer-chassis/"
      },
      {
        "id": 55,
        "title": "ماوس",
        "url": "/search/category-mouse/"
      },
      {
        "id": 56,
        "title": "مانیتور",
        "url": "/search/category-monitor/",
        "items": [
          {
            "id": 56001,
            "item": "مانیتور OLED",
            "url": "/search/facet/category-monitor/panel-type-oled/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ec622ae183d7666a90929bb428fe7787ec5bbdc4_1692773186.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 60,
        "title": "اسپیکر",
        "url": "/search/category-speaker/",
        "items": [
          {
            "id": 60001,
            "item": "اسپیکر بلوتوثی",
            "url": "/search/category-speaker/?attributes%5B2204%5D%5B0%5D=16977&sort=7",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2770910cb0eca9de6ea303632fdd51b1635f2d78_1675683749.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60002,
            "item": "اسپیکر jbl",
            "url": "/search/category-speaker/jbl/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121815740.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60003,
            "item": "اسپیکر هارمن کاردن",
            "url": "/brand/harman-kardon/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/17b1ab9b992c82977c437aa04cf525c08d4aeeba_1624268453.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60004,
            "item": "اسپیکر سونی",
            "url": "/search/category-speaker/sony/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/10e5d2a39f63dfbcf0934fe0b79648e64e494979_1626164708.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60005,
            "item": "اسپیکر تسکو",
            "url": "/search/category-speaker/tsco/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b623a5cad13a6d49b821444a9d28e784172258b4_1686636092.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60006,
            "item": "اسپیکر مکسیدر",
            "url": "/search/category-speaker/maxeeder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2bae07e8388a3a12a1bdeb909a181398905bd22b_1661942378.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60007,
            "item": "اسپیکر میکرولب",
            "url": "/search/category-speaker/microlab/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0f812cd522f902c988b93d47ea992e8be73fb5fb_1708896301.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 60008,
            "item": "پارتی باکس",
            "url": "/tags/partybox-speaker/?sort=4",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cdee5bab650ef792d16420b6c1245a787ec1f8fa_1677873437.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 58,
        "title": "قطعات کامپیوتر",
        "url": "/search/category-computer-devices/",
        "items": [
          {
            "id": 58001,
            "item": "پردازنده (cpu)",
            "url": "/search/category-processor/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ba42f11e3b0a03d7fb0ddf601bccc5ef5f87fb07_1668509424.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 58002,
            "item": "کارت گرافیک",
            "url": "/search/category-graphics-card/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/dc5790c3015761a924c681de6830b3307aa7b2ed_1635347643.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 58003,
            "item": "مادربرد",
            "url": "/search/category-motherboard/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3443d0b34c15937b8082727fd3676c44a9622736_1651921302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 58004,
            "item": "دانگل بلوتوث",
            "url": "/search/category-bluetooth-dongle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/dbce18a8c929280cdc2c7ee645150e283dbcd844_1640509397.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 71,
        "title": "رم کامپیوتر",
        "url": "/search/category-ram/"
      },
      {
        "id": 59,
        "title": "هدفون",
        "url": "/search/category-headphone/",
        "items": [
          {
            "id": 59001,
            "item": "هدفون بی سیم",
            "url": "/search/category-headphone/?attributes%5B2352%5D%5B0%5D=21576&attributes%5B2352%5D%5B1%5D=31584&attributes%5B2352%5D%5B2%5D=21577&sort=21&types%5B0%5D=127",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59002,
            "item": "هدفون گیمینگ",
            "url": "/search/facet/category-headphone/suitable-for-gaming/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e2834ab3c83cede137b6e79ce9b3e02d77a9338b_1745827620.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59003,
            "item": "هدفون اپل (ایرپاد)",
            "url": "/search/category-headphone/apple/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0d022d11cb7b5b1544a7132df4e9dfe9354ac195_1745824979.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59004,
            "item": "هدفون بیتس",
            "url": "/search/category-headphone/beats/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112214613.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59005,
            "item": "هدفون سونی",
            "url": "/search/category-headphone/sony/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e04c28634f087684f17c8f833ee09a9b52c37e6a_1745760223.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59006,
            "item": "هدفون سامسونگ (ایربادز)",
            "url": "/search/category-headphone/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fdf44defacc3f6ae130ee3deeb49cf8dd63f9c62_1745760220.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59007,
            "item": "هدفون شیائومی",
            "url": "/search/category-headphone/xiaomi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e0311364b5129c686ba62339bfd5bd5e947bcaac_1687345664.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59008,
            "item": "هدفون جی بی ال",
            "url": "/search/category-headphone/jbl/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/516a28028980b39c337e9d243b88dab74891cce4_1666616488.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 59009,
            "item": "هدفون ریزر",
            "url": "/search/category-headphone/razer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d1a908eed8da6508cc88a3e65d87312763b753e4_1745760225.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 728,
        "title": "هدست",
        "url": "/search/category-headphone/?sort=7&types%5B0%5D=129"
      },
      {
        "id": 57,
        "title": "ساعت و مچ بند هوشمند",
        "url": "/search/category-wearable-gadget/",
        "items": [
          {
            "id": 57001,
            "item": "ساعت هوشمند سامسونگ",
            "url": "/search/category-smart-watch/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/53b4feb9dead4898764793a7c21c71561d1775aa_1689578146.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 57002,
            "item": "ساعت هوشمند شیائومی",
            "url": "/search/category-smart-watch/xiaomi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5e5bfe5e1c9bf2f62e716862b223ec41a3fd3557_1694957658.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 57003,
            "item": "اپل واچ",
            "url": "/search/category-smart-watch/apple/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e3e7b50ce2d86fbe7e84eaf709cc567cd6784895_1739286604.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 57004,
            "item": "بند اپل واچ",
            "url": "/search/category-apple-watch-cover/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4502130.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 57005,
            "item": "بند ساعت هوشمند",
            "url": "/search/category-watch-band/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/476d23ba78043a1ae60f629d45a9b4c26be10e25_1606268956.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 57006,
            "item": "لوازم جانبی ساعت هوشمند",
            "url": "/search/category-watch-accessorie/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9d6fd98aacb676576a542035161467087951cf83_1675162114.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 62,
        "title": "دوربین",
        "url": "/search/category-digital-camera/",
        "items": [
          {
            "id": 62001,
            "item": "دوربین فیلمبرداری",
            "url": "/search/category-camcorder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1c1a17a57e3829b997862965a9a4f811b8cd80db_1686206569.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 62002,
            "item": "دوربین کنون",
            "url": "/search/category-digital-camera/canon/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/114000898.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 62003,
            "item": "دوربین سونی",
            "url": "/search/category-digital-camera/?brands%5B0%5D=1",
            "image": "https://dkstatics-public.digikala.com/digikala-products/62e778ae3fd66e16079b64c257ed579013cbd457_1688207687.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 62004,
            "item": "دوربین چاپ سریع",
            "url": "/search/category-digital-camera/?q=%da%86%d8%a7%d9%be%20%d8%b3%d8%b1%db%8c%d8%b9&entry=mm",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bc7ae7ac0107001fe6c9ccc2363ed22e24817785_1740067121.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 63,
        "title": "تجهیزات ذخیره‌سازی اطلاعات",
        "url": "/search/category-data-storage/",
        "items": [
          {
            "id": 63001,
            "item": "هارد ssd",
            "url": "/search/category-internal-ssd/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a8adad9651045b37fd02e6e860c7c841f89c3671_1612898573.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 63002,
            "item": "هارد اینترنال",
            "url": "/search/category-internal-hard-drive/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112683136.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 63003,
            "item": "هارد اکسترنال",
            "url": "/search/category-external-hard-disk/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/826947.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 63004,
            "item": "هارد اکسترنال ssd",
            "url": "/search/category-external-ssd/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/71c5c294f812a1b9f94d0f5a6b8f3f5e4d2d8a7e_1707741559.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 61,
        "title": "فلش",
        "url": "/search/category-usb-flash-memory/",
        "items": [
          {
            "id": 61001,
            "item": "فلش ۲۵۶ گیگ",
            "url": "/search/facet/category-usb-flash-memory/capacity-256-gb-capacity-256-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1f903925bcf71527d2ed018337dd4a87dff4f4cc_1598044970.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 61002,
            "item": "فلش ۱۲۸ گیگ",
            "url": "/search/facet/category-usb-flash-memory/capacity-128-gb-capacity-128-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/722643.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 61003,
            "item": "فلش ۶۴ گیگ",
            "url": "/search/facet/category-usb-flash-memory/capacity-64-gb-capacity-64-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7bc55987e4908b476c8f4f3788678e2082905a39_1641184032.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 61004,
            "item": "فلش ۳۲ گیگ",
            "url": "/search/facet/category-usb-flash-memory/capacity-32-gb-capacity-32-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/794a92424cbd77cb8832a1e285367e7bc54da3c8_1661750037.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 61005,
            "item": "فلش ۱۶ گیگ",
            "url": "/search/facet/category-usb-flash-memory/capacity-16-gb/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/564038.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 727,
        "title": "پاور بانک",
        "url": "/search/category-power-bank/"
      },
      {
        "id": 72,
        "title": "باتری",
        "url": "/search/category-battery-charger-and-accesories/"
      },
      {
        "id": 66,
        "title": "پرینتر",
        "url": "/search/category-printer/"
      },
      {
        "id": 69,
        "title": "ماشین‌های اداری",
        "url": "/search/category-office-machines/"
      },
      {
        "id": 74,
        "title": "تجهیزات شبکه و ارتباطات",
        "url": "/search/category-network/",
        "items": [
          {
            "id": 74001,
            "item": "هاب USB",
            "url": "/search/category-usb-hub/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7168930d2b21849fc3e0499c415c68fac7feea0c_1675066259.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74002,
            "item": "سوییچ",
            "url": "/search/category-switch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c8ffcd166a87af0f48879cd50635085bb7d5a765_1731355636.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74003,
            "item": "هاب سوئیچ",
            "url": "/search/category-hub-switch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/110521564.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74004,
            "item": "تجهیزات ویدئویی",
            "url": "/search/category-network-video-recorder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/31309f41d9b11185a638a302fc322ad15dbe0784_1728137834.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74005,
            "item": "کارت شبکه",
            "url": "/search/category-network-card/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/42611.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74006,
            "item": "کامپیوتر سرور",
            "url": "/search/category-server-computer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2e8ae47149cf10d49dc5fde4bec27532ee3541d1_1695889163.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74007,
            "item": "رک شبکه و سرور",
            "url": "/search/category-rack/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/61015c5cd06c95d2e0148713e05cf88ee28cb4b4_1724093302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74008,
            "item": "پچ پنل",
            "url": "/search/category-patch-panel/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f8585266cf472fe69b1828ca9f6926bed108ca40_1639489547.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 74009,
            "item": "پرینت سرور",
            "url": "/search/category-print-server/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8131.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 73,
        "title": "مودم",
        "url": "/search/category-modem-router-adsl/",
        "items": [
          {
            "id": 73001,
            "item": "مودم جیبی",
            "url": "/search/category-3g-4g-and-5g-modem-router/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d0d7b40f90e221067c769b42c6d36d29a19bf71b_1618651339.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 73002,
            "item": "مودم ایرانسل",
            "url": "/search/category-3g-4g-and-5g-modem-router/mtn-irancell/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/110511571.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 73003,
            "item": "مودم همراه اول",
            "url": "/search/category-3g-4g-and-5g-modem-router/ir-mci/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/973bf8ea5251911bedeb196fc8e9e83bb2a2c2f3_1673935962.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 73004,
            "item": "توسعه دهنده محدوده بی‌سیم",
            "url": "/search/category-wireless-range-extender/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f3f1190510c758a3405590db4d5a90b826d06d59_1680712423.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 73005,
            "item": "روتر و اکسس پوینت",
            "url": "/search/category-router-accesspoint/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4270848.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 75,
        "title": "تجهیزات امنیتی و نظارتی",
        "url": "/search/category-security-and-surveillance-equipment/",
        "items": [
          {
            "id": 75001,
            "item": "دوربین مدار بسته",
            "url": "/search/category-network-cam/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/79fbd07a97dcef541b9bbd35668d0b078e3475d4_1655302925.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 75002,
            "item": "پایه دوربین مدار بسته",
            "url": "/tags/cctv-camera-stand/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1b91f77a7835ae3789a3abdc32dca0e12e75b6cd_1597492799.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 75003,
            "item": "ماکت دوربین مدار بسته",
            "url": "/tags/cctv-fake-camera/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e71d2c31accffff9b4ec9a4c48308cfdeb1dbf7d_1667594975.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1413,
        "title": "تبلت",
        "url": "/search/category-tablet/"
      },
      {
        "id": 1646,
        "title": "ایپد",
        "url": "/search/category-tablet/apple/",
        "items": [
          {
            "id": 1646001,
            "item": "ایپد ایر",
            "url": "/tags/ipad-air/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ca6ca2d298cd8de21110ee58c14a473fd242f4d5_1719247981.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1646002,
            "item": "ایپد پرو",
            "url": "/tags/ipad-pro/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/151ed5a4bd0e8e486d01c8c29473a9f5fe07d0ff_1719079038.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 656,
        "title": "خانه هوشمند",
        "url": "/tags/smart-home/?sort=7"
      },
      {
        "id": 64,
        "title": "برندهای برتر",
        "url": "/search/electronic-devices/",
        "items": [
          {
            "id": 64001,
            "item": "شیائومی",
            "url": "/brand/xiaomi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1690712123.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64002,
            "item": "سامسونگ",
            "url": "/brand-landing/samsung/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9215f6ea2fe115788a09dcb6836e78486d46b707_1725971909.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64003,
            "item": "اپل",
            "url": "/landing/apple-shop/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/be908c704a2e73e620bcb59e1c1c51bdf023c7d4_1727594405.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64004,
            "item": "هواوی",
            "url": "/brand-landing/huawei/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/37796f58ce7c6830699802e3cb6cfbf24aa24239_1686637513.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64005,
            "item": "آنر",
            "url": "/brand-landing/honor/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0413e367b8dc86523251694dab894112c8753aee_1704009369.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64006,
            "item": "ریلمی",
            "url": "/brand-landing/realme/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/86001c3917e4dd53292302d8847f9ef54e7187b0_1698587025.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64007,
            "item": "توشیبا",
            "url": "/brand/toshiba/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/287fab4e440d4bd5e6e55bda99d08b3e411cf16a_1615317622.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64008,
            "item": "تکنو",
            "url": "/brand/techno/?categories%5B0%5D=11&categories%5B1%5D=80&categories%5B2%5D=204&categories%5B3%5D=6395",
            "image": "https://dkstatics-public.digikala.com/digikala-products/beea6fa00fc3115d7830b383e836e7c5928e0618_1689681479.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 64009,
            "item": "ایرانسل",
            "url": "/brand/mtn-irancell/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/461ccfb621ac29658cc5065f45255189a5c8630e_1645466793.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 67,
        "title": "داغ ترین ها",
        "url": "/search/electronic-devices/?sort=7",
        "items": [
          {
            "id": 67001,
            "item": "گیمینگ",
            "url": "/landing/game/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e4c65acf8f41f5c656aa4d039b36bd22bb7f2350_1703512111.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 67002,
            "item": "هدفون گربه ای",
            "url": "/tags/cat-headphones/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b0164e058cbc1c7c71fb67fed7e990bd953aee34_1745824977.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 67003,
            "item": "فیفا",
            "url": "/tags/fifa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cef57aed25ae4dbab7850aed4b4b1aeaa7baf4a6_1695723164.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "main-title": "خانه و آشپزخانه",
    "generalLink": "همه محصولات خانه و آشپزخانه",
    "url": "/main/home-and-kitchen/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 907,
        "title": "ظروف پخت و پز",
        "url": "/search/category-cooking-dishes/",
        "items": [
          {
            "id": 907001,
            "item": "قابلمه و تابه",
            "url": "/search/category-pots-pans/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/301b461a3aadf28262f1d7e7f0f57e7e6bbed1eb_1700650415.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 907002,
            "item": "زودپز",
            "url": "/search/category-pressurecooker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c7f7bcf99d4cde81b5a7f5ad912e9c1632275b3d_1684588571.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 907003,
            "item": "سرویس پخت و پز",
            "url": "/search/category-cookwareset/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/434d590d2cea645011a88b362ed2929b4ae044ac_1694684129.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 910,
        "title": "ابزار آشپزی",
        "url": "/search/category-cooking-tools/",
        "items": [
          {
            "id": 910001,
            "item": "ست کفگیر و ملاقه",
            "url": "/search/category-spatulaladleset/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8ad3681874c7989afc1a8ff2a12bb348d1c9e35e_1686125308.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910002,
            "item": "چاقو",
            "url": "/search/category-Cooking-knife/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ee8ef22ba6908ed1fff4cb28df6642325cf9cc24_1634046821.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910003,
            "item": "تخته گوشت",
            "url": "/search/category-meat-board/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4603880.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910004,
            "item": "ظرف و قالب یخ",
            "url": "/search/category-icetray/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3162552.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910005,
            "item": "قیف",
            "url": "/search/category-funnel/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9516fadd656af7838ac9f6d0657e4ffb19d35f6e_1609919523.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910006,
            "item": "صافی",
            "url": "/search/category-virgo-1/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/95ddf810970d9167bc817772ba5f21000dd450c8_1610272676.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910007,
            "item": "گردو شکن",
            "url": "/tags/duster/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d1832caed975414b74c4940f632ebb1e4c10db11_1671750039.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910008,
            "item": "فندک آشپزخانه",
            "url": "/search/category-kitchenlighter/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9d81e335e2a694798ace97e98243c984fb5d7c44_1654505573.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 910009,
            "item": "ترازوی آشپزخانه",
            "url": "/search/category-kitchen-weighing-scale/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b8fe75fc2485df832532f28d310511762440e997_1596965500.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 908,
        "title": "تهیه و سرو چای و قهوه",
        "url": "/search/category-kettleandteapot/"
      },
      {
        "id": 909,
        "title": "ظروف آشپزخانه",
        "url": "/search/category-plateandetc/",
        "items": [
          {
            "id": 909001,
            "item": "آبکش و آبگیر",
            "url": "/search/category-virgobasin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/250562e49879a7eedc3efcab291ebdf874cc0651_1634128711.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909002,
            "item": "بطری",
            "url": "/search/category-bottle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bfb93f67b40f480afeac68f21bf624d2ec9e78fb_1632325141.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909003,
            "item": "ارگانایزر آشپزخانه",
            "url": "/search/category-organizer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/119212832.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909004,
            "item": "جای ادویه",
            "url": "/search/category-spice-shaker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ac4a44738fc6863df5e09fd4b167236fc610b1b2_1683578190.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909005,
            "item": "بانکه و ظروف بنشن",
            "url": "/search/category-legumecontainer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f54b104a6c5159c371f93812081c9ce117ee0b43_1682799207.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909006,
            "item": "شکر پاش و نمک پاش",
            "url": "/search/category-salt-sugar-shaker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e73eceb67caebc7db1ee40a2dc28e5063f09f624_1698929637.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909007,
            "item": "سبد آشپزخانه",
            "url": "/search/category-kitchenbasket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6772b67f18e990e1f48e035d469efd33c62953a7_1662351837.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909008,
            "item": "سبد سیب زمینی و پیاز",
            "url": "/search/category-basket-of-potatoes-and-onions/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6fd50b8e90bf9d93ce4e98d248923ac015aa324f_1626524845.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 909009,
            "item": "ظرف نگهدارنده",
            "url": "/search/category-container/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/49a5c48d6718dd9540eeb147e1083b2437f3a8b4_1677908765.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 911,
        "title": "لوازم تهیه کیک و دسر",
        "url": "/search/category-pastry/"
      },
      {
        "id": 914,
        "title": "سرو و پذیرایی",
        "url": "/search/category-serving/",
        "items": [
          {
            "id": 914001,
            "item": "سفره",
            "url": "/search/category-table-cloth/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/628e7fa02da7bb0205855d81a2517d5a4118c7d3_1701030581.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914002,
            "item": "ماگ",
            "url": "/search/category-mug/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/110217277.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914003,
            "item": "سینی",
            "url": "/search/category-tray/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/33129af6acfcc6195daf37a8dddc9a56a503f86d_1655118632.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914004,
            "item": "لیوان",
            "url": "/search/category-cupandmug/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/62aff93a12188f789deb6e8d77a95dcfbe33d853_1698700653.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914005,
            "item": "بشقاب",
            "url": "/search/category-plate/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0862c2a2efe181d85254068fa70507e685a352dc_1677533048.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914006,
            "item": "قندان",
            "url": "/search/category-sugarcubebowl/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112678987.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914007,
            "item": "پارچ و بطری",
            "url": "/search/category-jug/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/aeb1fe68c89f5a6631dcaaeee58a886679c7dba1_1684271240.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914008,
            "item": "بستنی خوری",
            "url": "/search/category-ice-cream-maker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/387af8cb23a272f0a87ddcfb10cd71f4a6b79b16_1636191562.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 914009,
            "item": "سس خوری و آبلیمو خوری",
            "url": "/search/category-sausedish/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c44b16cddd339150172b9cd38334805f8eb503a6_1688391307.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 912,
        "title": "منسوجات آشپزخانه",
        "url": "/search/category-towelhandkerchief/"
      },
      {
        "id": 915,
        "title": "مبل",
        "url": "/search/category-sofa/",
        "items": [
          {
            "id": 915001,
            "item": "مبل راحتی",
            "url": "/tags/sofa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bc780c1b7c66210a458c926d50e62a0a0c622407_1700378821.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915002,
            "item": "مبل تختخواب شو",
            "url": "/tags/Sofa-bed/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/87735f45d77ebef9febe7b597ddb7470612fdecd_1734519791.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915003,
            "item": "مبل بادی",
            "url": "/tags/inflatable-sofa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/120193322.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915004,
            "item": "مبل تدی",
            "url": "/tags/Teddy-sofa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/98799ed47556837aa0ef0d46baef762c5e47b7c6_1732442048.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915005,
            "item": "مبل ال",
            "url": "/tags/Sofa-L/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/07ed9183a79aca9529be76512bba78da904973f4_1715724324.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915006,
            "item": "مبل مینیمال",
            "url": "/tags/Minimal-sofa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d911553fecacebc98802a80a5ee615190f7265ce_1668606311.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915007,
            "item": "مبل چستر",
            "url": "/tags/Chester-sofa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fafd5de2d9a35e1643b783191fd2686092d510f6_1666466242.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915008,
            "item": "مبل اداری و صندلی انتظار",
            "url": "/search/category-waiting-chair/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f0dfb3a0248e7a09221538029fdfadd624ade146_1629533696.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 915009,
            "item": "پاف و بین بگ",
            "url": "/search/category-sofapouffeandbeanbag/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1e8c1ceba061091486e12f824fbf8057663d93ba_1638189203.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 916,
        "title": "دکوراسیون خانگی",
        "url": "/search/category-household-furniture/",
        "items": [
          {
            "id": 916001,
            "item": "کتابخانه",
            "url": "/search/category-home-library/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/731754cbe2b40ffe6026c9167bed6661c5940921_1605449148.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 916002,
            "item": "شلف و طبقه",
            "url": "/search/category-wall-shelf/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f5bb450b0d3e6788df474cd46f6173eb3a881211_1621515556.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 916003,
            "item": "کنسول",
            "url": "/search/category-console/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/634e0a653e1cce808069221773682ab158aa45e9_1642187208.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 916004,
            "item": "صندلی",
            "url": "/search/category-counter-chair/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f2ef5cdc14ceba3595fd95468dc24de49ba39ae5_1678171099.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 916005,
            "item": "میز ناهارخوری",
            "url": "/search/category-dining-table/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a2068f6559ed8702e568576879cf9c7c9ad8eb6c_1686701808.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 917,
        "title": "مبلمان و دکوراسیون اداری",
        "url": "/search/category-office-furniture/"
      },
      {
        "id": 918,
        "title": "نگهدارنده لباس و لوازم",
        "url": "/search/category-storagedresser/"
      },
      {
        "id": 919,
        "title": "دکوراتیو",
        "url": "/search/category-decorative-ac/"
      },
      {
        "id": 920,
        "title": "قاب عکس و تابلو",
        "url": "/search/category-photo-frames-paintings/"
      },
      {
        "id": 921,
        "title": "کوسن، رومیزی و شال مبل",
        "url": "/search/category-Cushions-tablecloths-sofa-shawls/"
      },
      {
        "id": 922,
        "title": "کفپوش و دیوارپوش",
        "url": "/search/category-wall-panel-flooring/"
      },
      {
        "id": 923,
        "title": "نور و روشنایی",
        "url": "/search/category-light-brightness/"
      },
      {
        "id": 924,
        "title": "فرش و گلیم",
        "url": "/search/category-carpet/"
      },
      {
        "id": 925,
        "title": "گل و گیاه",
        "url": "/search/category-natural-flowers/"
      },
      {
        "id": 927,
        "title": "حمام",
        "url": "/search/category-bathroom/"
      },
      {
        "id": 928,
        "title": "سرویس بهداشتی",
        "url": "/search/category-watercloset/"
      },
      {
        "id": 929,
        "title": "خواب",
        "url": "/search/category-bedandbath/"
      },
      {
        "id": 930,
        "title": "شستشو و نظافت",
        "url": "/search/category-cleaning/"
      },
      {
        "id": 931,
        "title": "نظافت لباس",
        "url": "/search/category-shoesandclothingcleaning/"
      }
    ]
  },
  {
    "id": 4,
    "main-title": "لوازم خانگی برقی",
    "generalLink": "همه محصولات لوازم خانگی برقی",
    "url": "/landing/category-home-appliance/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 838,
        "title": "تهویه، سرمایش و گرمایش",
        "url": "/search/category-airtreatment/",
        "items": [
          {
            "id": 838001,
            "item": "کولر گازی",
            "url": "/search/category-air-conditioner-2/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2c97d4fb9b2ecfed05008df177063a17aad9c263_1680697207.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838002,
            "item": "کولر آبی",
            "url": "/search/category-iranian-cooler/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/122668.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838003,
            "item": "پنکه",
            "url": "/search/category-fan/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/154597.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838004,
            "item": "تصفیه کننده هوا",
            "url": "/search/category-air-purifier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a575a232b1cabd461dcbcc63e765f33b1e18f21c_1664004139.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838005,
            "item": "بخاری برقی",
            "url": "/search/category-heater/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bd9edd3a004081db573705c6713c374dbdd02b85_1606160220.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838006,
            "item": "پکیج دیواری و رادیاتور",
            "url": "/search/category-wall-hung-combination-boiler/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b4fe8bd437676c44186bb2d4c77777396fdd8782_1656771011.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838007,
            "item": "بخاری",
            "url": "/search/category-gas-heater/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ede67a4a92223d6abbcad1e8ee9f733f4f340f2d_1604222466.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838008,
            "item": "شوفاژ برقی",
            "url": "/search/category-radiator/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bce4fd4dcbb118059ac623f26ea11b844069e00d_1670424221.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 838009,
            "item": "آبگرمکن",
            "url": "/search/category-water-heater/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8bfcaaa728df0a3d22f22cdb7159fcc7ac7e8119_1642779360.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 839,
        "title": "یخچال فریزر",
        "url": "/search/category-refrigerator-freezer/",
        "items": [
          {
            "id": 839001,
            "item": "یخچال فریزر ساید بای ساید",
            "url": "/search/category-refrigerator-freezer/?sort=7&types%5B0%5D=4669",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c3fc80a4da955ad31ce54ddcd6333866bc0ba8ce_1690899248.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 839002,
            "item": "یخچال فریزر دوقلو",
            "url": "/search/category-refrigerator-freezer/?sort=7&types%5B0%5D=4671",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f1640804d19e75466883e43012df7eb02a8895ef_1691852211.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 839003,
            "item": "یخچال فریزر هتلی",
            "url": "/search/category-refrigerator-freezer/?sort=7&types%5B0%5D=9710",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3a7b568fd437b77be10fb952ea8684540128c67d_1662275830.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 839004,
            "item": "یخچال فریزر کمبی",
            "url": "/search/category-refrigerator-freezer/?sort=7&types%5B0%5D=4670",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9548966b88097af275885dcdac1f221bd65c0812_1701169306.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 840,
        "title": "جاروبرقی",
        "url": "/search/category-vaccum-cleaner/",
        "items": [
          {
            "id": 840001,
            "item": "جارو شارژی",
            "url": "/search/category-handheld-vacuum/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6bb0ddbcce181a6d09e58ea5da00a2ef731bbede_1717337566.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 840002,
            "item": "لوازم جانبی جاروبرقی و بخارشور",
            "url": "/search/category-vacuum-cleaner-consumption/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1d79e943804862fef91dab779ef4a1fc9c68ee8f_1657094471.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 840003,
            "item": "جارو رباتیک",
            "url": "/search/category-robotic-vacuum-cleaner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3868d0779eea405da81cf91e76a1a111c48318a2_1649148631.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 842,
        "title": "ماشین لباسشویی",
        "url": "/search/category-washing-machines/",
        "items": [
          {
            "id": 842001,
            "item": "ماشین لباسشویی دوو",
            "url": "/search/category-washing-machines/daewoo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ce800592545a9220b64f5ae339075a62bfdca5b1_1682775343.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 842002,
            "item": "ماشین لباسشویی پاکشوما",
            "url": "/search/category-washing-machines/pakshoma/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b73fcefd3c39db835c0e94a796668205bed802a3_1699538942.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 842003,
            "item": "ماشین لباسشویی اسنوا",
            "url": "/search/category-washing-machines/snowa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/39fa43be4f14fb2e36d12b9f5603222606ea80f1_1695649351.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 842004,
            "item": "مینی واش",
            "url": "/search/category-diaper-cleaner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3464195.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 843,
        "title": "ماشین ظرفشویی",
        "url": "/search/category-dishwasher/",
        "items": [
          {
            "id": 843001,
            "item": "ماشین ظرفشویی جی پلاس",
            "url": "/search/category-dishwasher/g-plus/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4ad7db712ebef60e275676ce71eee0c0c66edebf_1684672622.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 836,
        "title": "صوتی و تصویری",
        "url": "/search/category-video-audio-entertainment/",
        "items": [
          {
            "id": 836001,
            "item": "ساندبار",
            "url": "/search/category-soundbar/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/66b2c0eba35b2d4168caa50cda2a954e1d6d36e7_1665912940.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 836002,
            "item": "ویدیو پروژکتور",
            "url": "/search/category-data-video-projector/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ced526dbf54683427a093f5e2266370367aeca07_1624818770.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 836003,
            "item": "اندروید باکس",
            "url": "/search/category-android-box/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b5cc77ed257842d50a719fe3c0890a0a04e6157e_1694445232.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 836004,
            "item": "پخش کننده خانگی",
            "url": "/search/category-home-multimedia-player/?has_selling_stock=1&sort=27",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7423e8a37485874d355cdef4e95faaaf5a2838bf_1657715313.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 836005,
            "item": "لوازم جانبی صوتی و تصویری",
            "url": "/search/category-multimedia-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/65db555b393cb10b78e3f8eca2afd55a57184619_1727504781.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 836006,
            "item": "ریموت کنترل",
            "url": "/search/category-remote-control/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3244320.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1868,
        "title": "تلویزیون",
        "url": "/search/category-tv2/",
        "items": [
          {
            "id": 1868001,
            "item": "تلویزیون 4k",
            "url": "/search/facet/category-tv2/image-resolution-ultra-hd-4k/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/18c131612baee6ebea42b34a0e238cb25ed6f0ac_1744619712.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1868002,
            "item": "تلویزیون گیمینگ",
            "url": "/search/facet/category-tv2/tv-kind-gaming/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a001631ddee72d1a26c2dc1c191ace77a5468c35_1737712736.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1868003,
            "item": "تلویزیون OLED",
            "url": "/search/facet/category-tv2/screen-technology-oled/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/735612e3bc3bf2f40e011b27629e9fa87e839e71_1732784428.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1868004,
            "item": "تلویزیون QLED",
            "url": "/search/facet/category-tv2/screen-technology-qled/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d79364a37f3888299b80a9d5da6e338aa97c565b_1737722669.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1868005,
            "item": "تلویزیون ۱۴۴ هرتز",
            "url": "/search/facet/category-tv2/refresh-rate-144-hz/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7a94ae00a16fe4f2813cbf33ebb277087dfd09fd_1734270260.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1868006,
            "item": "تلویزیون ۱۲۰ هرتز",
            "url": "/search/facet/category-tv2/refresh-rate-120-hz/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9f76b87250d3d8b249de9840c331dab55e23c9f2_1744534917.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1868007,
            "item": "میز تلویزیون",
            "url": "/search/category-tv-tables/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d8d6f08abc66be764e669dc6e6427f9e84cc84b7_1645729291.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1876,
        "title": "تلویزیون براساس سایز",
        "url": "/",
        "items": [
          {
            "id": 1876001,
            "item": "تلویزیون ۸۶ اینچ",
            "url": "/search/facet/category-tv2/size-86-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/050accfe3c3fc0b736c367e9269113b76c8ec004_1713788526.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876002,
            "item": "تلویزیون ۸۵ اینچ",
            "url": "/search/facet/category-tv2/size-85-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7bfe2d3dbbd6728ecc9a7ca973298bc4d7dbde43_1732629549.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876003,
            "item": "تلویزیون ۷۵ اینچ",
            "url": "/search/facet/category-tv2/size-75-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/623c319e7285899b891fb8ce81d323171ccae7bf_1694516642.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876004,
            "item": "تلویزیون ۷۰ اینچ",
            "url": "/search/facet/category-tv2/size-70-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9d13dee847ca35811e15cc834bc7f9433507060b_1745599733.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876005,
            "item": "تلویزیون ۶۵ اینچ",
            "url": "/search/facet/category-tv2/size-65-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/50d1d96eaf54081acd71fb2a9c61cd94e825226d_1690790751.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876006,
            "item": "تلویزیون ۶۰ اینچ",
            "url": "/search/facet/category-tv2/size-60-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8546054d27fe762694782dc9b3597ee12221001e_1747502576.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876007,
            "item": "تلویزیون ۵۸ اینچ",
            "url": "/search/facet/category-tv2/size-58-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c21f0ab9eaf6acf48ee3b0b0191b28dbcee1184a_1732603828.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876008,
            "item": "تلویزیون ۵۵ اینچ",
            "url": "/search/facet/category-tv2/size-55-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/aefa0b1f7e50423e91197d5c9eb1ac2dd6f27fb1_1737731585.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1876009,
            "item": "تلویزیون ۵۰ اینچ",
            "url": "/search/facet/category-tv2/size-50-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b1f336e36824dd06456c2d5ee715c701c096d2e1_1737715948.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 844,
        "title": "اتو",
        "url": "/search/category-iron/",
        "items": [
          {
            "id": 844001,
            "item": "اتو بخار ایستاده",
            "url": "/search/category-iron/?sort=7&types%5B0%5D=5528",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d4247ac24aaa2b093ff1875e1757bd78697eaeff_1596261477.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 844002,
            "item": "اتو بخار",
            "url": "/search/category-iron/?sort=7&types%5B0%5D=4680",
            "image": "https://dkstatics-public.digikala.com/digikala-products/faecbf7c93eac576a72c159565c3cacc9e832ac8_1619527287.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 844003,
            "item": "بخارگر",
            "url": "/search/category-iron/?sort=7&types%5B0%5D=5256",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bc9d1a336d5e0851716206391e28eb0197767e38_1645482112.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 845,
        "title": "چرخ خیاطی",
        "url": "/search/category-sewing-machine/",
        "items": [
          {
            "id": 845001,
            "item": "چرخ خیاطی ژانومه",
            "url": "/search/category-sewing-machine/janome/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/120369501.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 845002,
            "item": "چرخ خیاطی کاچیران",
            "url": "/search/category-sewing-machine/kachiran/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c1d5229838089c5bf0a38b48207754e5d2a9af79_1658310636.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 846,
        "title": "لوازم پخت و پز",
        "url": "/search/category-cooking/",
        "items": [
          {
            "id": 846001,
            "item": "سرخ کن بدون روغن (air fryer)",
            "url": "/search/category-airfryer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/68971590561c982a47d0bd5df6e5ef686f24c15d_1641027821.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846002,
            "item": "مایکروویو، مایکروفر",
            "url": "/search/category-microwave/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/97089c3381f41b6a3f9c4547389c6c61fa011a55_1662798168.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846003,
            "item": "اجاق گاز",
            "url": "/search/category-oven/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c3978010bc3989383d1bad87491804509c0fe65f_1645719761.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846004,
            "item": "پلوپز",
            "url": "/search/category-electric-rice-cooker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/99388150bef966e38796eb8a7f8e49df4ed0326b_1666698305.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846005,
            "item": "ساندویچ ساز و وافل ساز",
            "url": "/search/category-sandwich-makers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1287075.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846006,
            "item": "آون توستر",
            "url": "/search/category-oven-toaster/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8c0bbbd622389b696f0a8ac8ef33aa615dde42da_1634127369.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846007,
            "item": "گریل و باربیکیو",
            "url": "/search/category-grill-barbecue/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3beaabce7020418daf483fac941de0ea80b96ef7_1608671064.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 846008,
            "item": "توستر",
            "url": "/search/category-toaster/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b2c07d73e593ac0e497436ccba62631d808ac270_1616597689.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 847,
        "title": "نوشیدنی ساز",
        "url": "/search/category-drink-maker/",
        "items": [
          {
            "id": 847001,
            "item": "قهوه ساز",
            "url": "/search/category-coffee-makers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b4d5690d008c6a21367a20b4cb9b81a0dcd9cce5_1656829148.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847002,
            "item": "اسپرسو ساز",
            "url": "/search/category-espresso-makers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9573a2f5f56442c3b0003719b17fe130352bd05e_1615919760.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847003,
            "item": "چای ساز",
            "url": "/search/category-tea-makers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/119458147.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847004,
            "item": "کتری برقی",
            "url": "/search/category-boiler/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0fecc8fe949720b85dc24ef77391434556dc0255_1657451812.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847005,
            "item": "سماور برقی",
            "url": "/search/category-electric-samovar/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4b1cb6aa42063e2ee2a15c974127ade14f388f0e_1670856523.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847006,
            "item": "آبمیوه گیری",
            "url": "/search/category-juicer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/90106.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847007,
            "item": "آب مرکبات گیر",
            "url": "/search/category-citrus-juicer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3b74855028aa7148aa67ce71df3cc49fdb108bb3_1667980021.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 847008,
            "item": "آسیاب قهوه",
            "url": "/search/?q=%D8%A2%D8%B3%DB%8C%D8%A7%D8%A8%20%D9%82%D9%87%D9%88%D9%87&sort=7",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e4e79a4c82fbf268e8a38641c7e32865ea8c03d6_1688030199.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 848,
        "title": "خردکن و غذاساز",
        "url": "/search/category-chopper-foodprocessor/",
        "items": [
          {
            "id": 848001,
            "item": "گوشت کوب برقی",
            "url": "/search/category-hand-blender/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/911391.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 848002,
            "item": "غذاساز",
            "url": "/search/category-food-processor/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/642450.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 848003,
            "item": "همزن",
            "url": "/search/category-mixer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1e4bd35ddab3b453c4a4aa3f02ef74d06f902c0c_1662923321.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 848004,
            "item": "مخلوط کن",
            "url": "/search/category-blenders/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1297110.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 848005,
            "item": "چرخ گوشت",
            "url": "/search/category-meat-mincers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/110467548.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 848006,
            "item": "خردکن",
            "url": "/search/category-chopper/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9b45fe71648337080ba56072dbd4e4568b141471_1664191573.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 848007,
            "item": "آسیاب",
            "url": "/search/category-grinder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/47be428078b972df42f5f4595120a1a539a2f2e9_1622028380.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 841,
        "title": "بخار شو",
        "url": "/search/category-steam-cleaner/"
      },
      {
        "id": 1459,
        "title": "تصفیه آب",
        "url": "/search/category-water-filters/",
        "items": [
          {
            "id": 1459001,
            "item": "فیلتر تصفیه آب",
            "url": "/product-list/plp_126906580/?sort=7",
            "image": "https://dkstatics-public.digikala.com/digikala-products/573db9d75ec256f7aeb935a4c0a702ccdbe8d7fc_1679504084.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 849,
        "title": "لوازم توکار",
        "url": "/search/category-built-in-appliances/",
        "items": [
          {
            "id": 849001,
            "item": "فر",
            "url": "/search/category-built-in-oven/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8a15e845dc3876dfea558726e6634f3b7ddd11d5_1697548063.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 849002,
            "item": "هود",
            "url": "/search/category-hood/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2857ff988d8f8b2a23fb9627c848fda4ef642f2d_1700067123.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 849003,
            "item": "گاز صفحه ای",
            "url": "/search/category-built-in-stove/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/97690b323f62bb26d1abb90255fbc9b3e9c68794_1692004381.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 849004,
            "item": "سینک ظرفشویی",
            "url": "/search/category-sink/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/51bed8cac4644b2064a895cfe3a3b745ef07b213_1604492143.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "main-title": "آرایشی بهداشتی",
    "generalLink": "همه محصولات آرایشی بهداشتی",
    "url": "/main/personal-appliance/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 461,
        "title": "لوازم آرایشی",
        "url": "/search/category-beauty/",
        "items": [
          {
            "id": 461001,
            "item": "آرایش صورت",
            "url": "/search/category-face/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/76cbe338e2c4ac911032cf0b4037251c2761b3ac_1624400168.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 461002,
            "item": "آرایش چشم",
            "url": "/search/category-eye-and-eyebrow/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a0f2b9c7c15f5356b0b40294fc6dd0ab1e969d07_1670417725.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 461003,
            "item": "آرایش ابرو",
            "url": "/search/category-eyebrow-cosmetics/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d62819bc6220937ada10365728c913932bcc9d81_1670421540.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 461004,
            "item": "آرایش لب",
            "url": "/search/category-lip/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/82f585aa46ea71d29fb1c2d8f3a6eb2937d53d89_1656410175.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 461005,
            "item": "بهداشت و زیبایی ناخن",
            "url": "/search/category-nail-care/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/98d2192ab3e00e400d88d102e3a40d4136a4e8e9_1594551654.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 461006,
            "item": "ابزار آرایشی",
            "url": "/search/category-other-cosmetics/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/400424.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 480,
        "title": "مراقبت پوست",
        "url": "/search/category-face-and-body-cream/",
        "items": [
          {
            "id": 480001,
            "item": "ضد آفتاب",
            "url": "/search/category-sunscreen-cream/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/71caa840492104dbddd2b74d744542fd5990aa4b_1625997515.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 480002,
            "item": "کرم مرطوب کننده و نرم کننده",
            "url": "/search/category-moisturizing-cream/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/73e6c27168f4d090274234481877a53747b9509c_1700583531.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 480003,
            "item": "ماسک صورت و بدن",
            "url": "/search/category-face-masque/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6e800b16e3cffe013d848ec6ac7907567b114178_1610974334.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 480004,
            "item": "پاک کننده صورت",
            "url": "/search/category-makeup-remover/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8ae90c4653386c7ccb626fc2b55a6b39869ecf99_1724844800.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 480005,
            "item": "تونر",
            "url": "/search/category-face-toner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/81352ba9318e353596ef9c0ce52717ad044606f1_1668511732.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 480006,
            "item": "مراقبت بدن",
            "url": "/search/category-body-care/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c2e05ba7899c92aa987aa8cbc957ebf57adc2b3f_1687628638.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 480007,
            "item": "ابزار مراقبت پوست",
            "url": "/search/category-skin-care-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8ebc05de75281c859b66ba6799f827a0844cc427_1608191532.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 482,
        "title": "مراقبت و زیبایی مو",
        "url": "/search/category-hair-care/",
        "items": [
          {
            "id": 482001,
            "item": "مراقبت مو",
            "url": "/search/category-hair-care/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5395868.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 482002,
            "item": "آرایش مو",
            "url": "/search/category-hair-products/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/36ab50148b3f71055270654c0e64dce30701ad2b_1619514222.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 482003,
            "item": "نرم کننده مو",
            "url": "/search/category-hair-conditioner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/041f0f6fcb51ed0a77c943e39d31858b8adef99c_1668413208.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 482004,
            "item": "شامپو مو",
            "url": "/search/category-hair-shampoo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d8eacc78ee359f049bd7e0d4148be053296ee084_1718698585.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 485,
        "title": "لوازم بهداشتی",
        "url": "/search/category-personal-care/",
        "items": [
          {
            "id": 485001,
            "item": "مراقبت دهان و دندان",
            "url": "/search/category-dental-hygienist/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/17a6d56f55e75ae89c42221a6881f6cd8baab63d_1720588445.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485002,
            "item": "مسواک",
            "url": "/search/category-tooth-brush/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/63b564ac9c29b71b7d8e749246a5cdda33f45da0_1627908007.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485003,
            "item": "خمیر دندان",
            "url": "/search/category-toothpaste/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/122057427.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485004,
            "item": "دئودورانت و ضد تعریق",
            "url": "/search/category-anti-sweat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/113985959.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485005,
            "item": "محصولات بهداشت جنسی",
            "url": "/search/category-sexual-health/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4295bb16c24311d456b5293cceab60ac295639d4_1676281443.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485006,
            "item": "کاندوم",
            "url": "/search/category-condom/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ab48f4fbf82e2050f93dcc69285cb8575f87fcb0_1684588214.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485007,
            "item": "بهداشت و مراقبت شخصی",
            "url": "/search/category-body-care/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/aa97657e99f52a0760c106192d0ff371a00cc8fa_1721662788.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485008,
            "item": "نوار بهداشتی",
            "url": "/search/category-sanitary-pad/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b50282f1aeda4e41e5ca30ffa39220b9ecfcc542_1692188382.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 485009,
            "item": "کاپ قاعدگی",
            "url": "/search/category-menstrual-cup/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/594de92be9bcaa5e8eb7a311bd102a1016842d68_1719650169.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 488,
        "title": "عطر و ادکلن",
        "url": "/search/category-perfume-all/",
        "items": [
          {
            "id": 488001,
            "item": "عطر و ادکلن زنانه",
            "url": "/search/category-women-perfume/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8c55b503cabf01abcecb9f1c4a00290ab577fd1f_1671705302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 488002,
            "item": "عطر و ادکلن مردانه",
            "url": "/search/category-perfume/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2c140e18eda188127ed80ee87eaf86723c4ea337_1611389666.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 488003,
            "item": "بادی اسپلش",
            "url": "/search/category-body-splash/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/868122.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 488004,
            "item": "عطر جیبی",
            "url": "/search/category-pocket-perfumes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1b58b0643068edfb32a050be108c596477d5eb74_1653901901.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 490,
        "title": "لوازم شخصی برقی",
        "url": "/search/category-electrical-personal-care/",
        "items": [
          {
            "id": 490001,
            "item": "سشوار",
            "url": "/search/category-hair-drier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ce82c73b2f03c16c4e5aa8d3018050bd20c0b8eb_1654761902.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 490002,
            "item": "اتو و حالت دهنده‌ی مو",
            "url": "/search/category-hair-iron/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f14d1e72fe6270f282fcc200bdcf64f1b9b68f68_1603024791.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 490003,
            "item": "اصلاح موی صورت",
            "url": "/search/category-shaver/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4b3ab1d912e97476ddea85063b9bd0ae42d38b86_1620406480.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 490004,
            "item": "اصلاح موی سر",
            "url": "/search/category-hair-trimmer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fa5e227f7df4dd505b7f77ddaa02d2f49a1db238_1680620748.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "main-title": "خودرو و موتورسیکلت",
    "generalLink": "همه محصولات خودرو و موتورسیکلت",
    "url": "/main/vehicles-spare-parts/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 431,
        "title": "لوازم مصرفی خودرو",
        "url": "/search/category-consumable-parts/",
        "items": [
          {
            "id": 431001,
            "item": "روغن موتور",
            "url": "/search/category-engine-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3fe3186f389fc2d02c948b6fad9900c8ebd37cfd_1675754986.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431002,
            "item": "فیلترها",
            "url": "/search/category-car-filters/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fcad6fa18616bae60f3d5cc9aefb0aa1ced0156c_1648493861.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431003,
            "item": "قطعات سرویسی",
            "url": "/search/periodic-service-parts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7966ff113e5b6690a57a9ce91ce8f789569b82db_1627217266.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431004,
            "item": "روغن گیربکس",
            "url": "/search/category-gearbox-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9baccdb28da88af4d0cf159a598ca472f52ee05b_1659758764.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431005,
            "item": "روغن هیدرولیک",
            "url": "/search/category-hydraulic-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b8dc71241a1d1355440be63b96c0aaa21bb2d27f_1648468418.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431006,
            "item": "ضدیخ و آب رادیاتور",
            "url": "/search/category-antifreeze/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cdadb57dcf60f6f05021170bec4fe4beac923bf7_1648466247.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431007,
            "item": "باتری",
            "url": "/search/category-automotive-battery/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cc9d5eb4ebeb3b0002ba0f27c696e063c78b9f91_1658896750.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431008,
            "item": "لاستیک",
            "url": "/search/category-tire/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112934608.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 431009,
            "item": "مکمل سوخت و روغن",
            "url": "/search/category-car-oil-and-fuel-additive/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9fdd6a85c7a02c3f53f599b1339b58284205edf9_1675175448.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 433,
        "title": "لوازم یدکی خودرو",
        "url": "/search/category-car-spare-parts/",
        "items": [
          {
            "id": 433001,
            "item": "لوازم بدنه",
            "url": "/search/car-body-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/521f32394bf883a1dc73628c3cf335573082006b_1613484551.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 433002,
            "item": "چراغ",
            "url": "/search/category-automotive-lighting/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d51a8563f24bc7701d0527b876a5a5a95a76b3d9_1656512436.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 433003,
            "item": "آینه جانبی",
            "url": "/search/category-side-mirrors/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/064fdf0cf916e82eddb5326b8e2182a95e6c08a0_1662647408.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 433004,
            "item": "لوازم جلوبندی و تعلیق",
            "url": "/search/front-suspension-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/111595750.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 433005,
            "item": "لوازم الکترونیکی",
            "url": "/search/car-electronics/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/22990a742420631915f90a5ac330159e64811261_1661632858.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 433006,
            "item": "لوازم مکانیکی",
            "url": "/search/mechanical-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/91a35fa459eb275e6b689ac089061c6a44c21e77_1684323293.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 434,
        "title": "لوازم صوتی و تصویری",
        "url": "/search/category-car-stereo/",
        "items": [
          {
            "id": 434001,
            "item": "دستگاه پخش",
            "url": "/search/category-car-player/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/53c922bcd514a60670c4a87f467cd26c4379cefd_1656153317.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 434002,
            "item": "بلندگو",
            "url": "/search/category-car-speaker/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/75b119b5755fe5917e3ab37708229f36b882c141_1724214496.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 434003,
            "item": "آمپلی فایر",
            "url": "/search/category-car-amplifier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3081101.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 434004,
            "item": "اف ام پلیر",
            "url": "/search/category-fm-player/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ea790c97798b6ac6d608c40d3c9a8517d46b250d_1595236725.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 434005,
            "item": "مسیریاب خودرو",
            "url": "/search/category-car-navigation/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6332109797d5595cb636a75a0d120c7572e8951d_1686643127.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 434006,
            "item": "لوازم جانبی صوتی و تصویری",
            "url": "/search/category-incar-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cdfa6a317c23f58efa1993d6f4d51d33e44dcbf6_1668919934.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 436,
        "title": "لوازم جانبی خودرو",
        "url": "/search/category-car-accessory-parts/",
        "items": [
          {
            "id": 436001,
            "item": "روکش صندلی",
            "url": "/search/category-car-chair-covers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cb7913e1ab33dd91e3aa79bf7bcc37b54bd719c9_1685357051.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436002,
            "item": "کفپوش خودرو",
            "url": "/search/category-car-coating/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/35c2a360b428c96869b665ba864bf7efe1f1b457_1618222909.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436003,
            "item": "کفپوش صندوق خودرو",
            "url": "/search/category-car-trunk-coating/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0b5620484bcc58ed7259e6851093eab594234589_1646485710.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436004,
            "item": "عایق کاپوت، صندوق و دربها",
            "url": "/search/category-car-hood-and-rear-insulated/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9025ee687e2d288ac52a66138d31a76f8701aecc_1661174087.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436005,
            "item": "چادر خودرو",
            "url": "/search/category-car-cover/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/97e7517ee8160aac510e7bee00cda5f57a65ea1c_1657724754.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436006,
            "item": "تجهیزات نظم دهنده",
            "url": "/search/category-car-organizer-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112700922.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436007,
            "item": "تجهیزات راحتی سرنشین",
            "url": "/search/category-passenger-comfort-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/01feda56016839b25ed3e610a33e92a74a9ef2e9_1667298726.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436008,
            "item": "لوازم ضد سرقت",
            "url": "/search/car-security-systems/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/25803ef592d6ff9bde4d527a8b6fbc379f4a7e7b_1595411139.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 436009,
            "item": "زنجیر چرخ",
            "url": "/search/category-tire-chains/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f07c2e2427b46f091889c6c4b530fa54ecf3a88a_1674568663.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 437,
        "title": "لوازم موتور سیکلت",
        "url": "/search/motorcycle-parts/",
        "items": [
          {
            "id": 437001,
            "item": "لوازم مصرفی",
            "url": "/search/motorbike-consumable-parts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/33e0d4ce75c691b03c03479b26057fd25b276aa8_1609584287.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 437002,
            "item": "لوازم یدکی",
            "url": "/search/motorbike-spare-parts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7604823211d5ba2e13fc622df36da862fb932a2f_1639047179.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 437003,
            "item": "لوازم جانبی",
            "url": "/search/motorcycle-safety-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d408dc2b846343bc6376031cb8cf41968c493c8c_1612481180.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 437004,
            "item": "لوازم ضد سرقت",
            "url": "/search/motorcycle-safety-equipment-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7fd83206036278b0df5b50e940632fba661451d3_1647268449.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 429,
        "title": "موتور سیکلت",
        "url": "/search/category-motorbike/"
      },
      {
        "id": 428,
        "title": "خودرو",
        "url": "/search/category-automobile/?has_selling_stock=1",
        "items": [
          {
            "id": 428001,
            "item": "خودرو سدان",
            "url": "/search/category-sedan-cars/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/53bf4fbd98ceb6ec1918275fab56d19af5c61e44_1737313323.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 428002,
            "item": "شاسی و نیمه شاسی",
            "url": "/search/category-SUV-crossover/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b7ab13781fa855f37c3205c334fe308bb83e5564_1738163114.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 428003,
            "item": "پیکاپ",
            "url": "/search/category-Pickup-truck/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/590d5d3c347e051bb82a7bc79692655f0b467094_1738222442.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1658,
        "title": "لوازم بر اساس نوع خودرو",
        "url": "/landing/car-accessory/",
        "items": [
          {
            "id": 1658001,
            "item": "206-207",
            "url": "/product-list/plp_48168763/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/fa4535cfdc834326535e6567917efb9e2248d63c_1737375486.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658002,
            "item": "L90-ساندرو",
            "url": "/product-list/plp_48169167/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/484fc3cd5c8780b1593dbf521dc95e5cb9167723_1737374831.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658003,
            "item": "پرشیا-پژو 405",
            "url": "/product-list/plp_48168874/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/1c45856321b0de6f48d44745b79baed27fe281b0_1737374978.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658004,
            "item": "پراید-تیبا",
            "url": "/product-list/plp_48169095/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/a1ea4094946307f6ac2ea3a37c983d7bfbb8a698_1737375019.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658005,
            "item": "سمند-دنا",
            "url": "/product-list/plp_48168996/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/f7161a3fabeefdebee396fd1882b95fbf734dbec_1737375198.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658006,
            "item": "کوئیک-ساینا",
            "url": "/product-list/plp_48169201/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/7ede93aaee5360bb4df473a5fc25d378ced88b1c_1737375278.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658007,
            "item": "زانتیا-برلیانس",
            "url": "/product-list/plp_79424560/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/ca466f76f9bd39db02edb4be0346a28f601dbe1c_1737375305.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658008,
            "item": "MVM-فونیکس",
            "url": "/product-list/plp_79424595/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/cb6efef321d9e91af8bed254b162d1a2c7d55251_1737375363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 1658009,
            "item": "جک-لیفان",
            "url": "/product-list/plp_79424618/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/9f40e0ee85e22b3fa2629916adb047ca633a472a_1737375392.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "main-title": "ابزار آلات و تجهیزات",
    "generalLink": "همه محصولات ابزار آلات و تجهیزات",
    "url": "/main/vehicles/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 514,
        "title": "ابزار برقی",
        "url": "/search/category-power-tools/",
        "items": [
          {
            "id": 514001,
            "item": "دریل",
            "url": "/search/category-drill/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cdba038bb0f96f6b443dbd56e43e941756b57867_1661425999.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514002,
            "item": "پیچ گوشتی و دریل شارژی",
            "url": "/search/category-cordlessscrewdriver/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0815811122c68e4116466403f7155f169166be1f_1681136387.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514003,
            "item": "آچار ضربه ای",
            "url": "/search/category-impact-wrench/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4963c79a5f93959d77d75317f64344e0afdf6efa_1715421438.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514004,
            "item": "فرز و سنگ رومیزی",
            "url": "/search/category-anglegrinder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0275a71120558a5149ec729bd9f04e9c168b8255_1596448290.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514005,
            "item": "موتور برق",
            "url": "/search/category-electric-engine/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/038b18edd91009dbe45727198e951bdd2973685a_1634711906.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514006,
            "item": "مکنده - دمنده",
            "url": "/search/category-blower/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/544186a31ef9b55acfd040fc8adc6cbb403638da_1606306507.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514007,
            "item": "جاروبرقی صنعتی",
            "url": "/search/category-industrial-vacuum-cleaner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/97d4fca746fc05892524c4a6229cb8b5cc975610_1615407673.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514008,
            "item": "کارواش",
            "url": "/search/category-carwash/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/096b2a68433e3bab5e8da5963a82af94707a4a5d_1677063289.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 514009,
            "item": "دستگاه جوش",
            "url": "/search/category-welder/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a38ead587f140e6d9465da7e0e963827b3b6774f_1617713141.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 526,
        "title": "ابزار غیر برقی",
        "url": "/search/non-electrical-tools/",
        "items": [
          {
            "id": 526001,
            "item": "ابزار دستی",
            "url": "/search/category-hand-tools/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/52cc09dd9bbded44f97675e24f9e192ccd9bc78b_1686219669.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526002,
            "item": "مجموعه ابزار",
            "url": "/search/category-tools-set/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ffa6a41451a807ccd25cb50a519d45b248058874_1650343878.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526003,
            "item": "نردبان",
            "url": "/search/category-ladders/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/669f7ffced6e715c4f91c04a6f58d49dd7ef8090_1610434674.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526004,
            "item": "پیچ گوشتی و فازمتر",
            "url": "/search/category-screwdriver/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/114793773.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526005,
            "item": "نظم دهنده ابزار",
            "url": "/search/category-tool-box/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9a50cac48d73d1b73e855e25f0c49f01cb081b3f_1602699230.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526006,
            "item": "متر، تراز، اندازه‌گیری دقیق",
            "url": "/search/category-measurement/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e2a533a8f35545b185b20cec3c0160736e69cd26_1645803329.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526007,
            "item": "لوازم روانکاری",
            "url": "/search/category-oilcan/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b8680d80573aeb8c38298a3d4cd0df886c59c9a6_1687345255.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526008,
            "item": "چسب صنعتی",
            "url": "/search/category-industrial-glue/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4f1b1814c9354e0f224edd591c15e6b29c6993c7_1646908060.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 526009,
            "item": "انواع آچار و انبر",
            "url": "/search/wrench-pliers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/dafe2182ab8c7d867ecf29ba82bd00f4270ad07b_1640490581.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 529,
        "title": "لوازم الکتریکی و یراق آلات",
        "url": "/search/category-construction-tools-and-equipment/",
        "items": [
          {
            "id": 529001,
            "item": "رنگ",
            "url": "/search/category-color/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5e7d380148ce5f8ffbcc040ae2261134ff2d20d4_1619595523.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 529002,
            "item": "لوازم الکتریکی",
            "url": "/search/electrical-tools/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f6cf1b7b4ef3b40d87c1c41ff714937ef1f4da07_1681459105.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 529003,
            "item": "مصالح ساختمانی",
            "url": "/search/category-building-materials/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d9d1df7c088aceefb802c4ab7463c257799899c5_1679996043.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 529004,
            "item": "زنگ و در بازکن",
            "url": "/search/bell-door-opener/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/70f37a95e5a7a5a1534bf0957df25859cfe91942_1619588416.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 539,
        "title": "لوازم باغبانی و کشاورزی",
        "url": "/search/category-gardening-tools/",
        "items": [
          {
            "id": 539001,
            "item": "ابزار باغبانی",
            "url": "/search/category-gardening-tools-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3370804.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 539002,
            "item": "ادوات کشاورزی",
            "url": "/search/category-agriculture-machines/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/76ecd92f9aa600d831f74e8c3c8ec20376942c8a_1689835237.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 539003,
            "item": "بذر و تخم گیاهان",
            "url": "/search/category-plants-grain-and-seeds/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/120237262.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 539004,
            "item": "خاک، کود و آفت کش",
            "url": "/search/category-soils-and-fertilizers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cc1f1a574cbf296c729035a2c17135db1401ce65_1648234324.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 539005,
            "item": "کاشت و پرورش گیاه",
            "url": "/search/category-planting-supplies/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/113394189.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 543,
        "title": "تجهیزات ایمنی و کار",
        "url": "/search/category-safety-tools/",
        "items": [
          {
            "id": 543001,
            "item": "ماسک تنفسی",
            "url": "/search/masks-mask-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5ed353d7d5289d04815ab7a4a4fc9419135c048e_1638701504.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 543002,
            "item": "لوازم آتش‌نشانی",
            "url": "/search/fire-fighting-equipment-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1646512.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 543003,
            "item": "لوازم ایمنی و کار",
            "url": "/search/safety-tools/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121577947.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 543004,
            "item": "جعبه کمک‌های اولیه",
            "url": "/search/category-first-aid-kit/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7c971e1317b956f9ea78c5133cc789679067527f_1672573678.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 543005,
            "item": "برچسب و علائم ایمنی",
            "url": "/search/category-environmental-controlling-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7c971e1317b956f9ea78c5133cc789679067527f_1672573678.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 546,
        "title": "حفاظتی و امنیتی",
        "url": "/search/protection-and-security-equipment/",
        "items": [
          {
            "id": 546001,
            "item": "گاوصندوق",
            "url": "/search/category-safe/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7b476791427d7450cff2e4fdf2d267b576ff05f5_1614071399.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 546002,
            "item": "قفل",
            "url": "/search/category-lock/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8781698a70b7acb923995a7793a5146666b1641d_1655648948.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 547,
        "title": "دستگاه های حمل و بالابر صنعتی",
        "url": "/search/industrial-transport-lifting-machine/",
        "items": [
          {
            "id": 547001,
            "item": "قطعات یدکی ماشین آلات صنعتی",
            "url": "/search/category-spare-parts-for-industrial-machinery/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b45c83b87c1b40cc5867fba937edc7d93e856a5a_1626595081.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 547002,
            "item": "تجهیزات کارگاهی",
            "url": "/search/category-workshop/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fb51cecc952bd341f69df33c180d0bb931007549_1599060094.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1499,
        "title": "شیرآلات",
        "url": "/search/category-faucets-valves/",
        "items": [
          {
            "id": 1499001,
            "item": "ست شیرآلات",
            "url": "/search/category-Faucet-set/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/48c7c04d030f305c6152b62f93dc09328c119eab_1671039237.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1499002,
            "item": "شیر ظرفشویی",
            "url": "/search/category-kitchen-tap/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/501625ab815bfe2782b0dea977477b3692d1ad39_1633173646.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1499003,
            "item": "شیر روشویی",
            "url": "/search/category-basin-faucet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5df1c53d3ef9bdd4e1e019c4bdc759b4898a1e40_1619284094.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1499004,
            "item": "شیرآلات حمام",
            "url": "/search/category-bathroom-faucet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/eb3f93f2ac325c0245bee6df5c1067c343ca02e1_1700116144.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1499005,
            "item": "شیر توالت",
            "url": "/search/category-toilet-faucet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ecabcd2e87ab2ec6972fee0b7a04ea6f67f1f85d_1655041426.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1499006,
            "item": "اتصالات جانبی",
            "url": "/search/category-faucets/?sort=7",
            "image": "https://dkstatics-public.digikala.com/digikala-products/008b6dbad1f3e7fe7677a7625458b2bd1a1facf4_1694849575.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "main-title": "مد و پوشاک",
    "generalLink": "همه محصولات مد و پوشاک",
    "url": "/landing/apparel/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 175,
        "title": "پوشاک مردانه",
        "url": "/search/category-mens-apparel/"
      },
      {
        "id": 176,
        "title": "لباس مردانه",
        "url": "/search/category-men-clothing/",
        "items": [
          {
            "id": 176001,
            "item": "هودی مردانه",
            "url": "/search/category-men-hoodie/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/117632811.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 176002,
            "item": "سویشرت مردانه",
            "url": "/search/category-mens-sweatshirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/170128a43f04f0e86279a0674ed4f31d567d5760_1669569407.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 176003,
            "item": "ژاکت و پلیور مردانه",
            "url": "/search/category-men-knitwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f89320347053ed3d6eed75b30ce3aafb51ea47ab_1728386597.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 176004,
            "item": "تی شرت مردانه",
            "url": "/search/category-men-tee-shirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d5acf2cdba348ad37a5ca78cc1e2ce91805462a4_1741024685.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 176005,
            "item": "پولوشرت مردانه",
            "url": "/search/category-men-polo-shirt/",
            "image": "https://dkstatics-public.digikala.com/digikala-mega-menu/9804555a4f201b2ebfaa492bd49582a9c3d1fc59_1739014837.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          },
          {
            "id": 176006,
            "item": "پیراهن مردانه",
            "url": "/search/category-men-shirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/70db85382a9b476b80dc95f174656d082f1802c2_1669999004.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 176007,
            "item": "لباس زیر مردانه",
            "url": "/search/category-men-underwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6de4b590f7be229d5021f436ee1e905eaf010fa1_1650004581.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 176008,
            "item": "شلوار مردانه",
            "url": "/search/category-men-trousers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/001e2514dad2388ce6fb30dc098ff21c97f25e58_1742218773.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 834,
        "title": "پالتو، بارانی و کاپشن مردانه",
        "url": "/search/category-men-outwear/",
        "items": [
          {
            "id": 834001,
            "item": "پالتو مردانه",
            "url": "/search/category-men-coat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cc691bb707d917159b5b4468927d644586ce633c_1672859002.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 834002,
            "item": "کاپشن مردانه",
            "url": "/search/category-men-warm-jacket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ecf43ac0a83210e6fb6c3df3d90ba7537f8ada15_1612099141.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 834003,
            "item": "کت چرم مردانه",
            "url": "/search/category-men-leather-outwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/14a7ae91c528190168eabd67b57485ab63fdf79e_1700119845.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 834004,
            "item": "پافر مردانه",
            "url": "/search/category-men-puffer-vest/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/71d8ce22610f4ecf3c4ea694e0a0407d610c893d_1669977173.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1182,
        "title": "کت، جلیقه و ست رسمی مردانه",
        "url": "/search/category-men-blazers-suits/",
        "items": [
          {
            "id": 1182001,
            "item": "کت تک مردانه",
            "url": "/search/category-men-formal-jacket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0ef9178b6154663694b2809453a045e75abc8ad3_1685798839.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1182002,
            "item": "کت شلوار مردانه",
            "url": "/search/category-men-suits-and-sets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c89416a07fb3cd447f4605c9f95b2bc2bcd18351_1707031620.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1182003,
            "item": "جلیقه مردانه",
            "url": "/search/category-men-formal-vest/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/19483242158f6cd4237903efe53f465198cc2003_1697833967.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1186,
        "title": "شلوار و سرهمی مردانه",
        "url": "/search/category-men-trousers-jumpsuits/",
        "items": [
          {
            "id": 1186001,
            "item": "شلوار جین مردانه",
            "url": "/search/category-men-jeans/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112760393.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1186002,
            "item": "لباس راحتی مردانه",
            "url": "/search/category-men-homewear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4acd84a80db51c66b99b283fd6352bd1f0eda866_1741024666.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1186003,
            "item": "شلوارک مردانه",
            "url": "/search/category-men-shorts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/093d82f1f700566349b5a71459f484f5c5232b5e_1693213316.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1186004,
            "item": "جوراب مردانه",
            "url": "/search/category-men-socks-tights/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0824b08c164880939a3094b92a61d2e4d2c3e098_1701027549.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1186005,
            "item": "شلوار اسلش مردانه",
            "url": "/search/facet/category-men-trousers/clothing-style-slash-up-to-100000000/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4e682ab20773142e1d60aac972f9bfc6ca26c859_1696664252.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1186006,
            "item": "شلوار مام استایل مردانه",
            "url": "/search/facet/category-men-trousers/clothing-style-mom-style-up-to-100000000/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/17ea0fb87fb630a5e73b2ad69b02b3d1892889c4_1720085634.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1186007,
            "item": "شلوار کارگو مردانه",
            "url": "/search/facet/category-men-trousers/clothing-style-cargo-up-to-100000000/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/17613ab57565e74b6060859324195e31412b3664_1740308951.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1197,
        "title": "کیف مردانه",
        "url": "/search/category-men-bags/",
        "items": [
          {
            "id": 1197001,
            "item": "کیف پول مردانه",
            "url": "/search/category-men-wallets-bags/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/927c8f294a5823ec132206ed86d4f963196ed00d_1630077130.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 177,
        "title": "کفش مردانه",
        "url": "/search/category-men-shoes/",
        "items": [
          {
            "id": 177001,
            "item": "نیم بوت مردانه",
            "url": "/search/category-men-ankle-boots/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/44b889f67162341c1f2bbcf767cc60c4a6c948a4_1664340163.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177002,
            "item": "بوت مردانه",
            "url": "/search/category-men-boots/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ef4ee79ec9c1c21f776f0767ca6df2d9dd250127_1707306624.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177003,
            "item": "کفش اسپرت مردانه",
            "url": "/search/category-men-sport-shoes-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ff2f076be6ded436a14cc1d4e5e48e79b78508ef_1610993916.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177004,
            "item": "کفش کالج مردانه",
            "url": "/search/category-men-driving-shoes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/18d7f7875a74e677a761d3dc93f316d4b01fa097_1696930244.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177005,
            "item": "صندل مردانه",
            "url": "/search/category-men-sandals/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cd7fbc513cc4e423912b37dfed3cbad7391984d7_1712836695.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177006,
            "item": "دمپایی مردانه",
            "url": "/search/category-men-slippers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/70037af1374cdeeaae382b54af39d303abbd5668_1615308894.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177007,
            "item": "دمپایی لا انگشتی مردانه",
            "url": "/search/category-men-flip-flops/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/be3fce9b4909e0dbf4d5bd5de36c8ab2c3c9f2d6_1673889440.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 177008,
            "item": "گیوه مردانه",
            "url": "/search/category-men-espadrilles/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9d2f8d4112f541ace981f8eda67aeaa9e0032cb1_1690301539.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 178,
        "title": "اکسسوری مردانه",
        "url": "/search/category-men-accessories/",
        "items": [
          {
            "id": 178001,
            "item": "ساعت مردانه",
            "url": "/search/category-men-watches/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/40dc05fbce3b18b0ef3ee43a77d3f374da00bbd8_1718786206.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 178002,
            "item": "عینک مردانه",
            "url": "/search/category-men-eyewear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/caf648706a29d483e10966be47f94ef050509d38_1673026785.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 178003,
            "item": "کمربند و ساسبند مردانه",
            "url": "/search/category-men-belts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3ba03e1125440743048565aceb24a9666dd2ba90_1629886682.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 178004,
            "item": "کلاه مردانه",
            "url": "/search/category-men-headwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/03202f8dee013f39f7df0c060dcf9d491d677dea_1651861992.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 178005,
            "item": "کراوات و پاپیون مردانه",
            "url": "/search/category-men-ties/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/114176467.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1202,
        "title": "ورزشی مردانه",
        "url": "/search/category-men-sports/",
        "items": [
          {
            "id": 1202001,
            "item": "لباس ورزشی مردانه",
            "url": "/search/category-men-sportswear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/90b3af88c56ac2a2d18f0ae4806cadb38de3997c_1691335489.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1202002,
            "item": "مایو مردانه",
            "url": "/search/category-men-swim-bottom/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3baeafc671e6f9ad1c79dc8dd8ae013de2dda123_1702312883.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1202003,
            "item": "گرمکن و ست ورزشی مردانه",
            "url": "/search/category-men-tracksuits-sets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0d591843188d53c8f6bff0b2e96399852dc22675_1653412932.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1202004,
            "item": "اکسسوری ورزشی مردانه",
            "url": "/search/category-men-sport-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2268230.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1202005,
            "item": "کفش ورزشی مردانه",
            "url": "/search/category-men-sport-shoes-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ab38625a30baf2719dea99870464bdeaf5216f97_1635343303.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1208,
        "title": "پک هدیه مردانه",
        "url": "/search/category-men-gifts-sets/"
      },
      {
        "id": 1194,
        "title": "لباس زیر مردانه",
        "url": "/search/category-men-underwear/",
        "items": [
          {
            "id": 1194001,
            "item": "زیرپوش مردانه",
            "url": "/search/category-men-undergarments/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/64254fc01ee7305515a1f6e90bfc82a661218c32_1625755099.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1194002,
            "item": "شورت مردانه",
            "url": "/search/category-men-underwear-bottom/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0d3b3f9b751e18d7c65693c692d62a62c94331e1_1707669741.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1209,
        "title": "پوشاک زنانه",
        "url": "/search/category-womens-apparel/"
      },
      {
        "id": 180,
        "title": "لباس زنانه",
        "url": "/search/category-women-clothing/",
        "items": [
          {
            "id": 180001,
            "item": "سویشرت زنانه",
            "url": "/search/category-womens-sweatshirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e53fc46505981768c73830c0206ebd78df0dbe48_1695928723.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180002,
            "item": "هودی زنانه",
            "url": "/search/category-women-hoodie/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f52b296db5cc611636c46fcf9cdc1741782b352d_1634372406.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180003,
            "item": "مانتو پانچو رویه",
            "url": "/search/category-manteau-and-poncho/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7d795a84c3ff37e9261ea515c08f37d0aa2311d5_1672749421.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180004,
            "item": "تیشرت زنانه",
            "url": "/search/women-tee-shirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4a0a146d204fceb934a4e2a0ecb68218b576622b_1594786325.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180005,
            "item": "بلوز و شومیز زنانه",
            "url": "/search/category-women-shirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/84802adbfd90ec98e87bfe0665346c813e2e12e5_1646486370.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180006,
            "item": "تاپ و نیم تنه زنانه",
            "url": "/search/category-women-tops-and-croptops/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/39d08b46c3d4949c2f725d339cd69c4a2487d6e3_1618745697.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180007,
            "item": "لباس راحتی زنانه",
            "url": "/search/category-women-homewear-sets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5296ea09544859c31b0716afb0770490e3330dca_1653716907.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180008,
            "item": "لباس زیر زنانه",
            "url": "/search/category-women-underwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b1afc283b7da01405f5a990fd40d67a59c406b33_1645876298.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 180009,
            "item": "دامن زنانه",
            "url": "/search/category-women-skirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/116901222.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1211,
        "title": "لباس خواب و راحتی زنانه",
        "url": "/search/category-women-homewear/",
        "items": [
          {
            "id": 1211001,
            "item": "لباس خواب زنانه",
            "url": "/search/category-women-homewear-sets-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/114643050.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1213,
        "title": "بلوز و شومیز زنانه",
        "url": "/search/category-women-shirts/",
        "items": [
          {
            "id": 1213001,
            "item": "بادی زنانه",
            "url": "/search/category-women-bodysuit-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/96d205eb73c8c812a05a638cb2b8b625c0e48cd6_1697960388.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1213002,
            "item": "ژاکت و پلیور زنانه",
            "url": "/search/category-women-knitwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a58d1fd202594728a0eda08e501c20240296a9f3_1707133442.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1213003,
            "item": "تاپ و نیم تنه زنانه",
            "url": "/search/category-women-tops-and-croptops/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d742bc09552e09422649889716faf29521b052ce_1682453214.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1213004,
            "item": "تونیک زنانه",
            "url": "/search/category-women-tunic/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/05a4d40a828eca577c6919f723626421ca2e581e_1708244574.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1213005,
            "item": "تیشرت زنانه",
            "url": "/search/category-women-tee-shirts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/117487485.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1225,
        "title": "پالتو، بارانی و کاپشن زنانه",
        "url": "/search/category-women-outwear/",
        "items": [
          {
            "id": 1225001,
            "item": "کاپشن زنانه",
            "url": "/search/category-women-warm-jacket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b6ce8210bcb129321b87b86d5f4beaeb9654150f_1666814891.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1225002,
            "item": "پالتو زنانه",
            "url": "/search/category-women-coat-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6c0c8a1ae18fd4bc78df51d71433bcdff7e51aa1_1693210683.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1225003,
            "item": "کت چرم زنانه",
            "url": "/search/category-women-leather-outwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1deec34197e49f4bf350de607df378dd3d28fad1_1694247035.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1225004,
            "item": "بارانی زنانه",
            "url": "/search/category-women-raincoat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0478f21cc55bee4f786725089356ef1621cca5aa_1702071752.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1225005,
            "item": "پافر زنانه",
            "url": "/search/women-puffer-vest/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0fc0ecd95621f68e32176ff58b6729886a64344b_1670421444.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1231,
        "title": "کت، جلیقه و ست رسمی زنانه",
        "url": "/search/category-women-blazers-and-suits/"
      },
      {
        "id": 1235,
        "title": "لباس زیر زنانه",
        "url": "/search/category-women-underwear/",
        "items": [
          {
            "id": 1235001,
            "item": "شورت زنانه",
            "url": "/search/category-women-underwear-bottom/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5acdc49e4355a1e8140437f3d6aafc6343bdb512_1635276698.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1235002,
            "item": "سوتین",
            "url": "/search/category-women-bra/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121242299.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1512,
        "title": "شلوار و سرهمی زنانه",
        "url": "/search/category-women-trousers/",
        "items": [
          {
            "id": 1512001,
            "item": "شلوار جین زنانه",
            "url": "/search/category-women-jeans/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5705c6b3823d2d2499d9bf1c63bbdcb2e514529a_1725785698.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1512002,
            "item": "لگینگ زنانه",
            "url": "/search/category-women-legging/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d6ab9605441a3dcad3251fe200faacc2154c411b_1680125287.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1512003,
            "item": "شلوارک زنانه",
            "url": "/search/category-women-trousers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/149d7b836ae40d840a7d2595b8c1856c50edd6fd_1597968407.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1512004,
            "item": "شلوار کارگو زنانه",
            "url": "/search/facet/category-women-trousers/clothing-style-cargo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0f8027a63571469ae9bad246f32dcd6979643c8b_1717353764.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1512005,
            "item": "شلوار بگ زنانه",
            "url": "/search/facet/category-women-trousers/clothing-style-baggy/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7cfd83212f1c135c342490d0babb695ed183cc8b_1646146306.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1512006,
            "item": "شلوار مام استایل زنانه",
            "url": "/search/facet/category-women-trousers/clothing-style-mom-style/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8d7af4b171541938903896df70b38a30486a430a_1713211619.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1239,
        "title": "مانتو زنانه",
        "url": "/search/category-women-manto/"
      },
      {
        "id": 1238,
        "title": "مقنعه و پوشیه",
        "url": "/search/category-women-scarf-and-burka/"
      },
      {
        "id": 1232,
        "title": "لباس بارداری",
        "url": "/search/category-women-maternity/",
        "items": [
          {
            "id": 1232001,
            "item": "شلوار و سرهمی بارداری",
            "url": "/search/category-women-maternity-trousers-and-jumpsuits/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a9a2b3549de04b60729f5b3c9452cb3e185cbfa9_1620997319.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1232002,
            "item": "پیراهن و لباس مجلسی بارداری",
            "url": "/search/category-women-maternity-dress/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/72291da86d55d6081dffb1592110f34a0df61323_1685855847.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1240,
        "title": "ورزشی زنانه",
        "url": "/search/category-women-sports/"
      },
      {
        "id": 1242,
        "title": "لباس ورزشی زنانه",
        "url": "/search/category-women-sportwear/",
        "items": [
          {
            "id": 1242001,
            "item": "گرمکن و ست ورزشی زنانه",
            "url": "/search/category-women-tracksuits-and-sets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/dbd2d828b63269642fefddd91d32c984be0a20a3_1707752308.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1242002,
            "item": "تاپ و نیم تنه ورزشی زنانه",
            "url": "/search/category-women-sport-tops/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0181dd7be3c152b44cb7b28caba56a12368c7a7e_1691139653.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1242003,
            "item": "شلوار و سرهمی ورزشی زنانه",
            "url": "/search/category-women-sport-trousers-and-jumpsuits/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6e3905ef7be58b8df67ca917c36f5c9ad3d3bacf_1699443674.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1242004,
            "item": "مایو زنانه",
            "url": "/search/category-women-swimwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fc083890bdfd895fe5b5cffd51ce9465250b85fd_1681295270.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 181,
        "title": "کفش زنانه",
        "url": "/search/category-women-shoes/",
        "items": [
          {
            "id": 181001,
            "item": "نیم بوت زنانه",
            "url": "/search/category-women-ankle-boots/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4c19ed24adb2b7d62e962fcd0074f5615d64bc45_1699263497.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181002,
            "item": "بوت زنانه",
            "url": "/search/category-women-boots/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fccfa949496d24356a9873d14f46324b43c4adba_1702743274.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181003,
            "item": "کفش اسپرت زنانه",
            "url": "/search/category-women-sport-shoes-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ef009210dbbded7fc444dc9b203747dcbec2c055_1671564637.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181004,
            "item": "کفش کالج زنانه",
            "url": "/search/category-women-boat-shoes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7cdde6ca74d8d4058115dcbac410d711c0cd29ab_1708014749.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181005,
            "item": "صندل زنانه",
            "url": "/search/category-women-sandals/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/58b5efc11e11b65e0caf67cb89c5ea27830c426b_1642274115.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181006,
            "item": "دمپایی لاانگشتی زنانه",
            "url": "/search/women-flip-flops/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/162382a1bab32ae180c0f003030e1ee93ec7a066_1687344220.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181007,
            "item": "دمپایی زنانه",
            "url": "/search/category-women-slippers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/43d986f536d51d20e2e54850973579dad67f5d5b_1690354588.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 181008,
            "item": "گیوه زنانه",
            "url": "/search/women-espadrilles/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d5bab8b987053c71ba8fb32d92b81804ce5869de_1668332582.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1252,
        "title": "کیف زنانه",
        "url": "/search/category-women-bags/"
      },
      {
        "id": 182,
        "title": "اکسسوری زنانه",
        "url": "/search/category-women-accessories/",
        "items": [
          {
            "id": 182001,
            "item": "ساعت زنانه",
            "url": "/search/category-women-watches/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/849535.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 182002,
            "item": "عینک زنانه",
            "url": "/search/category-women-eyewear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/21ab8f745bcb5ea46f1f73d56385ffe59f2906ad_1657978620.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 182003,
            "item": "کمربند زنانه",
            "url": "/search/category-women-belts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/656ac09fce4279b742481362ebf9c2501f6426d3_1604940834.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1253,
        "title": "ست هدیه زنانه",
        "url": "/search/category-women-gifts-and-sets/"
      },
      {
        "id": 1254,
        "title": "پوشاک بچگانه",
        "url": "/search/category-kids-apparel/"
      },
      {
        "id": 1255,
        "title": "ست راحتی و خواب بچگانه",
        "url": "/product-list/plp_233326865/"
      },
      {
        "id": 1257,
        "title": "کفش و ست ورزشی بچگانه",
        "url": "/product-list/plp_233323968/"
      },
      {
        "id": 1268,
        "title": "کیف و کوله و کفش بچگانه",
        "url": "/product-list/plp_233325382/"
      },
      {
        "id": 1271,
        "title": "دمپایی و صندل بچگانه",
        "url": "/product-list/plp_233324690/"
      },
      {
        "id": 1283,
        "title": "لباس پسرانه",
        "url": "/search/category-boys-clothes/",
        "items": [
          {
            "id": 1283001,
            "item": "تیشرت پسرانه",
            "url": "/search/category-boys-tee-shirts/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9ff6f3f70cf39b311c9e0596435c4426cb69e8f9_1647511339.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1283002,
            "item": "شلوار و سرهمی جین پسرانه",
            "url": "/product-list/plp_233713263/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a14f85341b2ff8c98bf92b891b6fc9bf2fb06561_1665295932.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1283003,
            "item": "سویشرت و هودی پسرانه",
            "url": "/product-list/plp_233712539/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d2c75a1ddff60c107e279ec13a5c24290613ea3d_1700297996.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1277,
        "title": "پوشاک دخترانه",
        "url": "/search/category-girls-clothing/",
        "items": [
          {
            "id": 1277001,
            "item": "پیراهن دخترانه",
            "url": "/product-list/plp_233711968/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e9ac98dd8d7ef4704b7a8172793ca2067c66e3e4_1728472623.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1277002,
            "item": "ست لباس دخترانه",
            "url": "/product-list/plp_233712571/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7ccb144f2b7de75946db91310a699a1b0886a95b_1726387806.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1277003,
            "item": "سویشرت و هودی دخترانه",
            "url": "/product-list/plp_233712692/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/92ba10aaed97b77624869f2a3464e8dc2c48c2ab_1736548421.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1277004,
            "item": "شلوار و سرهمی جین دخترانه",
            "url": "/product-list/plp_233713379/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3b7c15b2d74ecfc379e00b963f71418595e6c550_1728290575.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1275,
        "title": "پوشاک نوزادی",
        "url": "/search/category-baby-clothing/",
        "items": [
          {
            "id": 1275001,
            "item": "ست لباس راحتی نوزاد",
            "url": "/product-list/plp_233711634/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d09799ef6fb0d12638e49c3cc9edc66695c69330_1731320574.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1275002,
            "item": "بادی نوزادی",
            "url": "/product-list/plp_233711724/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7de368945eaa1a99fe9d1074478838e48aa8fe62_1690185521.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1275003,
            "item": "ست نوزاد",
            "url": "/product-list/plp_233711873/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4bf3210f6cacc48cdd8bb824d1141ae65533c41d_1731363067.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1275004,
            "item": "سرهمی نوزاد",
            "url": "/product-list/plp_233712889/?sort=25",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b3b372be3343a3b563cc010559f61c7d8b0a8c5d_1731319288.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1548,
        "title": "انبارتکانی پوشاک",
        "url": "/landing/Cloths-shoes-outlet/"
      },
      {
        "id": 192,
        "title": "برند هامتو",
        "url": "/brand/humtto/"
      },
      {
        "id": 187,
        "title": "برند چرم مشهد",
        "url": "/brand/mashad-leather/"
      },
      {
        "id": 196,
        "title": "برند اسمارا",
        "url": "/brand/esmara/"
      },
      {
        "id": 194,
        "title": "برند کروم",
        "url": "/brand/corum/"
      },
      {
        "id": 1306,
        "title": "برند سرژه",
        "url": "/brand/serge/"
      },
      {
        "id": 1471,
        "title": "برند گردیه",
        "url": "/brand/gordye/"
      },
      {
        "id": 195,
        "title": "برند چرم عطارد",
        "url": "/brand/atarod-leather/"
      },
      {
        "id": 1305,
        "title": "شلوار مام فیت",
        "url": "/tags/mom-fit-pants/"
      }
    ]
  },
  {
    "id": 9,
    "main-title": "طلا و نقره",
    "generalLink": "همه محصولات طلا و نقره",
    "url": "/landing/gold-jwelery-category-page/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 1308,
        "title": "شمش و پلاک طلا",
        "url": "/search/category-bullion/"
      },
      {
        "id": 1309,
        "title": "سکه طلا",
        "url": "/search/category-gold-coin/",
        "items": [
          {
            "id": 1309001,
            "item": "ربع سکه",
            "url": "/search/facet/category-gold-coin/coin-type-quarter-coin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5ef9a737e70ccd47a244682239b473cf69f83072_1722068380.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1309002,
            "item": "نیم سکه",
            "url": "/search/facet/category-gold-coin/coin-type-half-coin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/feccccb695ebfeda659e875008f8eedb56884434_1694526231.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1309003,
            "item": "سکه تمام",
            "url": "/search/facet/category-gold-coin/coin-type-full-coin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e5af389ed2cb8d3c3420a920e7ac33dfa450e1ce_1725099919.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1309004,
            "item": "سکه پارسیان",
            "url": "/tags/Persian-coins/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2b7c6b98997d65b6410bdbf90f450e766b22091b_1733898058.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1309005,
            "item": "سکه قسطی",
            "url": "/search/category-Installment-gold-coin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e6239d13043c7171f61c262f871c9021759dc04f_1733912461.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1310,
        "title": "طلای آب شده",
        "url": "/search/category-melt-gold/"
      },
      {
        "id": 1585,
        "title": "طلای کم اجرت",
        "url": "/search/category-economicgold/",
        "items": [
          {
            "id": 1585001,
            "item": "گردنبند طلا کم اجرت (دست اول)",
            "url": "/search/category-women-economic-gold-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cac006269a6ac096c8c1563dd4c7ea37f1f4c093_1732985498.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1585002,
            "item": "النگو طلا کم اجرت (دست اول)",
            "url": "/search/category-women-economic-gold-bangle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/03284b2072aee2a42cd0857f8df35f4f2b5eb4a3_1730703723.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1585003,
            "item": "دستبند طلا کم اجرت (دست اول)",
            "url": "/search/category-women-economic-gold-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/478e95a698a76387ca18f458d81fc574adb512f5_1723375968.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1585004,
            "item": "گوشواره طلا کم اجرت (دست اول)",
            "url": "/search/category-women-economic-gold-earrings/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/61916f2bc7ae0f85945136e0cc6051950edfc095_1732646298.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1606,
        "title": "گردنبند طلا زنانه",
        "url": "/search/category-women-gold-necklace/",
        "items": [
          {
            "id": 1606001,
            "item": "گردنبند مرواریدی زنانه",
            "url": "/tags/women-pearl-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6840b417789ad2b31282159f347f078e6f398592_1732452904.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1606002,
            "item": "گردنبند چشم نظر",
            "url": "/tags/evil-eye-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bc18736f0729209b424218cde2115eabec2f0902_1607383665.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1606003,
            "item": "گردنبند ونکلیف",
            "url": "/tags/vancleef-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/89f5cb09a0aa239caa42b4239a06adc820ce6e78_1731433472.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1606004,
            "item": "گردنبند اسم و حروف",
            "url": "/tags/letter-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9ada7a03ff1a77d268fbc8026e24d2fad2c008a8_1734030687.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1606005,
            "item": "گردنبند کارتیر",
            "url": "/tags/Cartier-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4da222e6dfbd191402ebaa6b187e6677c7e29d04_1731505651.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1606006,
            "item": "گردنبند ماه تولد",
            "url": "/tags/birth-symbol/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e54b47f16501502c3e13ee70a13d966607c7069a_1618262974.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1606007,
            "item": "گردنبند رولباسی",
            "url": "/tags/long-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3620891.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1635,
        "title": "زنجیر طلا",
        "url": "/search/category-women-gold-chain/",
        "items": [
          {
            "id": 1635001,
            "item": "زنجیر فلامینگو",
            "url": "/tags/flamingo-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ee8a0fcd2506c0397d1f75cec8bf0ae08fa8aac8_1642672810.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1635002,
            "item": "زنجیر ونیزی",
            "url": "/tags/venetian-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3c7b4f0473660568003130b4003625fab50983c7_1670093798.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1635003,
            "item": "زنجیر میرو",
            "url": "/tags/miro-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3d0c462c6af319584fd07df4ceee32b87adb1a0a_1665747268.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1635004,
            "item": "زنجیر تیغ ماهی",
            "url": "/tags/ish-bon-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1ae5f7171cd58c4ff8f9377716de9ae934af1a46_1732520563.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1630,
        "title": "گوشواره طلا",
        "url": "/search/category-women-gold-earrings/",
        "items": [
          {
            "id": 1630001,
            "item": "گوشواره بخیه ای",
            "url": "/tags/stitched-earring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/706c0e815b207d0c3f6f6d0ae6f8e2216304aad8_1633293912.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1630002,
            "item": "گوشواره کلیپسی",
            "url": "/tags/clip-on-earring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/effe88928e55b67ff45f5c12001a901f22bd8f2c_1729106624.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1630003,
            "item": "گوشواره میخی",
            "url": "/tags/studs-earring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d8d4eb04ab6158e55ca3fc45ece7c7d934b49c9b_1729341394.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1630004,
            "item": "گوشواره حلقه ای",
            "url": "/tags/hoop-earring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ab2f7d88b2e1a0861afd5c0bffd5442c89ba55a3_1724773118.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1614,
        "title": "انگشتر طلا زنانه",
        "url": "/search/category-women-gold-ring/",
        "items": [
          {
            "id": 1614001,
            "item": "انگشتر نگین دار",
            "url": "/tags/women-jeweled-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/30cbb056de2b23cb068043fef37d2bb85424b157_1713083806.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614002,
            "item": "انگشتر کارتیر",
            "url": "/tags/crtier-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fd58cbd7c6d8c7752c0b4f8511e35569f786d01e_1723378842.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614003,
            "item": "انگشتر ونکلیف",
            "url": "/tags/vancleef-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/086ee2d20bab53a0141a8860157e25fbe43edf91_1706176472.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614004,
            "item": "انگشتر ظریف",
            "url": "/tags/delicate-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b37ccf0d322244c78711c122ac38a78458613c33_1732441784.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614005,
            "item": "انگشتر چشم نظر",
            "url": "/tags/evil-eye-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/854ff9a872376535d4f57cc4fe6f3e4010d0cd75_1741178361.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614006,
            "item": "بند انگشتی طلا",
            "url": "/tags/midi-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e7e1ec0ae45cd9a4eabd07643242a2513a6b5e7e_1663051590.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614007,
            "item": "انگشتر مرواریدی",
            "url": "/tags/women's-pearl-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2336b3a8e746935ecd1f1fcf13ab395cd44481c6_1730786927.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1614008,
            "item": "انگشتر بدون نگین",
            "url": "/tags/non-jeweled-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6f1fe17568dc9947eeae12cf12a5d74d9651aba9_1734138279.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1623,
        "title": "دستبند طلا زنانه",
        "url": "/search/category-women-gold-bracelet/",
        "items": [
          {
            "id": 1623001,
            "item": "دستنبد کارتیر",
            "url": "/tags/cartier-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8bf2911380a92f19463a4408b6454dfe8aad740a_1728465306.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1623002,
            "item": "دستبند چشم نظر",
            "url": "/tags/evil-eye-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/825a4beedb94573195a1e1bf69f0c5e0a572e459_1622573235.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1623003,
            "item": "دستبند مرواریدی",
            "url": "/tags/women-pearl-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/75051b176bcd02b04e52a0dbdba72d8ee47ec6c2_1602661039.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1623004,
            "item": "دستبند چرم و طلا",
            "url": "/tags/gold-leatherbracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6d9cf1fda26346f5372e4dfa4e2a7e20b3dc5fb9_1727729170.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1623005,
            "item": "دستبند تیفانی",
            "url": "/tags/tiffany-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e0da9f241bc537ce78f3d037ec3027c29eec7baf_1724490658.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1623006,
            "item": "دستنبد اسم و حروف",
            "url": "/tags/letter-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3468d935865f0a3eea13c11e7ffa03d4e9e9322d_1734957781.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1349,
        "title": "پابند طلا",
        "url": "/search/category-women-gold-anklet/"
      },
      {
        "id": 1350,
        "title": "پیرسینگ طلا زنانه",
        "url": "/search/category-women-gold-piercing/"
      },
      {
        "id": 1640,
        "title": "ست زیورآلات طلا زنانه",
        "url": "/search/category-women-gold-jewelry-sets/"
      },
      {
        "id": 1351,
        "title": "آویز ساعت طلا زنانه",
        "url": "/search/category-women-gold-watch-pendant/"
      },
      {
        "id": 1312,
        "title": "زیورآلات طلا مردانه",
        "url": "/search/category-men-gold-jewelry/",
        "items": [
          {
            "id": 1312001,
            "item": "انگشتر طلا مردانه",
            "url": "/search/category-men-gold-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a545a6094fae0260b33f931ba771381aaefa1b83_1672309395.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1312002,
            "item": "زنجیر طلا مردانه",
            "url": "/search/category-men-gold-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/608dec6cfcf17e2049dfb714ccf7052ac237c901_1665513018.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1312003,
            "item": "گردنبند طلا مردانه",
            "url": "/search/category-men-gold-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c22f9c3dd855dec46c8a4d5963b116df69db61cb_1697013940.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1312004,
            "item": "دستبند طلا مردانه",
            "url": "/search/category-men-gold-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f1b1b62ead1c24a70629f34e0fad24e201f47deb_1704105872.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1312005,
            "item": "ست زیورآلات طلا مردانه",
            "url": "/search/category-men-gold-jewelry-sets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1f308893dcbddbfd61b7f31d31503a3e614ce6af_1666693082.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1312006,
            "item": "دکمه سردست طلا مردانه",
            "url": "/search/category-men-gold-cufflinks/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4868041f3243051080d9cda2682e798cd4c78478_1642428159.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1312007,
            "item": "جاکلیدی طلا مردانه",
            "url": "/search/category-men-gold-keychain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/95ec6ac6dc1d6b19ba07b8a5aa0d00647aa714cd_1666432705.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1313,
        "title": "زیورآلات طلا زنانه و مردانه",
        "url": "/search/category-uni-gold-jewelry/"
      },
      {
        "id": 1314,
        "title": "زیورآلات طلا بچگانه",
        "url": "/search/category-kids-gold-jewelry/"
      },
      {
        "id": 1315,
        "title": "زیورآلات طلا دخترانه",
        "url": "/search/category-girls-gold-jewelry/",
        "items": [
          {
            "id": 1315001,
            "item": "دستبند طلا دخترانه",
            "url": "/search/category-girls-gold-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8e00d99bc99646ab46eef9cef97b4f109d7e0825_1696146730.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1315002,
            "item": "گوشواره طلا دخترانه",
            "url": "/search/category-girls-gold-earrings/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8a66e9c6f61515b229fb02258b8ccee3a7b495cd_1671343568.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1315003,
            "item": "ست زیورآلات طلا دخترانه",
            "url": "/search/category-girls-gold-jewelry-sets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ea6b0457425e012ada033b0a0a88dc63ea1e6c1f_1621916561.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1315004,
            "item": "گردنبند طلا دخترانه",
            "url": "/search/category-girls-gold-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/801829c6d07e57a36f8603275159dc9a54f88dfa_1653682810.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1315005,
            "item": "آویز طلا دخترانه",
            "url": "/search/category-girls-gold-pendants/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7dc47656a50b2845ce45e893fc69cf85bbbb1dbc_1612596218.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1315006,
            "item": "انگشتر طلا دخترانه",
            "url": "/search/category-girls-gold-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f77e7c5f4a00b9307f2b82f9548ccc8fed63dba1_1661674024.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1316,
        "title": "زیورآلات طلا پسرانه",
        "url": "/search/category-boys-gold-jewelry/"
      },
      {
        "id": 1317,
        "title": "زیورآلات طلا دخترانه و پسرانه",
        "url": "/search/category-gold-jewelry-for-girls-and-boys/",
        "items": [
          {
            "id": 1317001,
            "item": "گل سینه طلا دخترانه و پسرانه",
            "url": "/search/category-gold-breasts-for-girls-and-boys/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/374500452bec546c318b67bbb23b68260965665b_1671343775.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1348,
        "title": "النگو طلا زنانه",
        "url": "/search/category-women-gold-bangle/"
      },
      {
        "id": 1352,
        "title": "گل سینه طلا زنانه",
        "url": "/search/category-women-gold-brooch/"
      },
      {
        "id": 1345,
        "title": "زیورآلات نقره زنانه",
        "url": "/search/category-women-silver-jewelry/",
        "items": [
          {
            "id": 1345001,
            "item": "انگشتر نقره زنانه",
            "url": "/search/category-women-silver-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/45c18cc09300f872afd31004e1f322a8e15e2438_1701241020.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345002,
            "item": "دستبند نقره زنانه",
            "url": "/search/category-women-silver-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e833717a089e226111baee12301bf0f369748bd0_1701938117.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345003,
            "item": "گردنبند نقره زنانه",
            "url": "/search/category-women-silver-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1ae201210f83dac50cfa98cc10381b3a209d93d5_1628702241.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345004,
            "item": "زنجیر نقره زنانه",
            "url": "/search/category-women-silver-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4eb473217df0639d2f958c18df0dfa6430557bb7_1597117702.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345005,
            "item": "گوشواره نقره زنانه",
            "url": "/search/category-women-silver-earrings/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6671dcd8fb66d1f9f4314738a5642a7eb22fe152_1697816945.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345006,
            "item": "پابند نقره زنانه",
            "url": "/search/category-women-silver-anklet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e9ec1f8d70cced466171b39a9c5f082626584ce6_1617702325.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345007,
            "item": "پیرسینگ نقره زنانه",
            "url": "/search/category-women-silver-piercing/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c88e7b042b08acb9b3ecbfd3e3e9189ef248554c_1688003242.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345008,
            "item": "آویز نقره زنانه",
            "url": "/search/category-women-silver-pendants/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f52eef1afecdf700c57be37c9533c7116214d478_1701257281.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1345009,
            "item": "آویز ساعت نقره زنانه",
            "url": "/search/category-women-silver-watch-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3179260.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1346,
        "title": "زیورآلات نقره مردانه",
        "url": "/search/category-men-silver-jewelry/",
        "items": [
          {
            "id": 1346001,
            "item": "انگشتر نقره مردانه",
            "url": "/search/category-men-silver-ring/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3ae051d136eb778a5c4dcc9b73bc5622370d7e65_1697103405.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1346002,
            "item": "گردنبند نقره مردانه",
            "url": "/search/category-men-silver-necklace/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b1e55bdce53b90b9e56fdd0c354ea23e9cc5904b_1701034273.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1346003,
            "item": "زنجیر نقره مردانه",
            "url": "/search/category-men-silver-chain/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/64551d2b053336d38cab7f6c6b57b15b6e348fa7_1695863153.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1346004,
            "item": "دستبند نقره مردانه",
            "url": "/search/category-men-silver-bracelet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4acfd2aa41e4b2b53cde6d73cec71ad5046005f7_1676545450.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1700,
        "title": "آویز طلا زنانه",
        "url": "/search/category-women-gold-pendants/",
        "items": [
          {
            "id": 1700001,
            "item": "آویز گل طلا",
            "url": "/tags/flower-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3174735.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1700002,
            "item": "آویز ستاره طلا",
            "url": "/tags/star-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/645bcd253dd81585bd6819a2e7b80c8fdf110701_1606234084.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1700003,
            "item": "آویز پروانه طلا",
            "url": "/tags/butterfly-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/97e5d23953182b7d65110080951982590e68a8b4_1739864689.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1700004,
            "item": "آویز قلب طلا",
            "url": "/tags/heart-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/14d603e7757873e8ac23594e640d2b6eb4bc45cd_1707655353.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1700005,
            "item": "آویز اسم طلا",
            "url": "/tags/name-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3bf31dad19faa21530cb9c66f3f484e1f44f134a_1703519187.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1700006,
            "item": "آویز طلای بی نهایت",
            "url": "/tags/infinity-pendant/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e8f1d4e7482139d6420360151d4f6fa05b8cf808_1606223780.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1396,
        "title": "مستجابی (Mostajabi)",
        "url": "/brand/talaye-mostajabi/"
      },
      {
        "id": 1395,
        "title": "گالری طلا پرسته (Parasteh)",
        "url": "/brand/parasteh/"
      },
      {
        "id": 1409,
        "title": "ماوی گالری (Mavi gallery)",
        "url": "/brand/mavi-gallery/"
      },
      {
        "id": 1408,
        "title": "تاج (Taj)",
        "url": "/brand/taj/"
      },
      {
        "id": 1412,
        "title": "الی گالری",
        "url": "/brand/eli-gold-gallery/"
      },
      {
        "id": 1411,
        "title": "گالری روبی آرت (Ruby Art)",
        "url": "/brand/ruby-art-gallery/"
      },
      {
        "id": 1410,
        "title": "گالری شیدا مجد",
        "url": "/brand/gallery-sheyda-majd/"
      },
      {
        "id": 1402,
        "title": "هور گلد گالری",
        "url": "/brand/hourgallery/"
      },
      {
        "id": 1407,
        "title": "مه گلد گالری",
        "url": "/brand/mahgallery/"
      },
      {
        "id": 1397,
        "title": "مایاماهک (maya mahak)",
        "url": "/brand/maya-maahak/"
      },
      {
        "id": 1406,
        "title": "طلای پارسیس",
        "url": "/brand/parsis/"
      },
      {
        "id": 1403,
        "title": "خانه سکه ایران (Iran Coin House)",
        "url": "/brand/iran-coin-house/"
      },
      {
        "id": 1401,
        "title": "دوست خوب (Doust khoub)",
        "url": "/brand/douste-khoub/"
      },
      {
        "id": 1405,
        "title": "اورل گالری",
        "url": "/brand/orel-gallery/"
      },
      {
        "id": 1398,
        "title": "سهی (Sahi)",
        "url": "/brand/sahi/"
      },
      {
        "id": 1404,
        "title": "کاپانی",
        "url": "/brand/kapani/"
      },
      {
        "id": 1400,
        "title": "زیوتو",
        "url": "/brand/zioto/"
      },
      {
        "id": 1399,
        "title": "گلدم",
        "url": "/brand/goldom-gold/"
      },
      {
        "id": 1584,
        "title": "درریس",
        "url": "/brand/dorris/"
      },
      {
        "id": 1710,
        "title": "ناریا",
        "url": "/brand/naria/"
      },
      {
        "id": 1722,
        "title": "طلا و شمش برلیان",
        "url": "/seller/gneat/"
      }
    ]
  },
  {
    "id": 10,
    "main-title": "تجهیزات پزشکی و سلامت",
    "generalLink": "همه محصولات تجهیزات پزشکی و سلامت",
    "url": "/landing/medical-health-equipment/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 1415,
        "title": "تجهیزات پزشکی",
        "url": "/search/category-medical-equipment/",
        "items": [
          {
            "id": 1415001,
            "item": "فشارسنج",
            "url": "/search/category-digital-sphygmomanometer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/55086b5624a0d81411441aac0ce0c014794aeff4_1699453179.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1415002,
            "item": "دماسنج محیطی",
            "url": "/search/category-enviroment-thermometer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1076b30541e63cfa997d0a67e3fa175b998201d7_1651482875.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1415003,
            "item": "ترازو",
            "url": "/search/category-digital-scale/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0cc0d96e09bf5dbeed3fa513cb62e72236ed601a_1699199740.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1415004,
            "item": "تب سنج و دماسنج",
            "url": "/search/category-thermometers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7f41d8742c40e04b2be105430f4474020058cb15_1666245132.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1415005,
            "item": "رطوبت‌ گیر",
            "url": "/search/category-dehumidifier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e425d17efcf178597b2227d0458270e99d455fae_1594801232.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1415006,
            "item": "پد و کیسه آب گرم",
            "url": "/search/category-tot-water-bag/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0ba33cf489b9a5a343d18dd61e30f88def4df225_1615023539.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1415007,
            "item": "تشک و پتوی برقی",
            "url": "/search/category-electric-underblankets-and-blanket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0ccfaa6ef56dbd89dc1ca7efbeab990e9c1624da_1704632478.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1737,
        "title": "تجهیزات پزشکی تنفسی",
        "url": "/",
        "items": [
          {
            "id": 1737001,
            "item": "دستگاه بخور و رطوبت ساز",
            "url": "/search/category-humidifiers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ced196b75212ee32ee1a0605077b214cf1df4e50_1746983406.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1737002,
            "item": "دستگاه بخور سرد",
            "url": "/search/facet/category-humidifiers/cold-fumigator/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/39e6947d8c8b67e34a9b798d57c84142ac332931_1621423175.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1737003,
            "item": "دستگاه بخور گرم",
            "url": "/search/facet/category-humidifiers/hot-fumigator/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b365f8f2d34a4dd9122a64ecf3a859c8c45c41d4_1702290583.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1737004,
            "item": "پالس اکسیمتر",
            "url": "/search/category-Pulse-oximeter/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ac535dea3a8093ea03e2554a5c1436bd96abee84_1691992260.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1737005,
            "item": "تجهیزات کمکی تنفسی",
            "url": "/search/category-respiratory-support-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/04050fd6b920fb59cf4fe8921586e5a352134738_1658903168.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1418,
        "title": "مکمل غذایی",
        "url": "/search/category-nutritional-supplements/",
        "items": [
          {
            "id": 1418001,
            "item": "مکمل کمک درمانی",
            "url": "/search/category-complementary-therapy/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/64d6275e9eb9edb02a6737bbc2dbd250ba6a5b6c_1620722512.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418002,
            "item": "مکمل کودک و نوزاد",
            "url": "/search/category-child-supplement/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4e0fa4d39236f5591abfa22445c5fcaaa6dc116d_1620042456.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418003,
            "item": "اعصاب و روان",
            "url": "/search/category-neurology-psychiatry/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1b1f912286fb41da2b58ad459309e4a6c582b480_1602664613.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418004,
            "item": "بینایی",
            "url": "/search/category-vision-supplement/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ddb94acd86c710f480ce194bb4f15ea0d68b019b_1645534575.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418005,
            "item": "بهداشت و سلامت جنسی",
            "url": "/search/category-sexual-hygiene-health/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d66bc8c282aa3f0a618c65a798d07c66d120cb40_1620035786.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418006,
            "item": "پوست مو و ناخن",
            "url": "/search/category-supplement-skin-hair-nails/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4533b7c7d14d8c2f95688bc114d032e75aad30ee_1660250171.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418007,
            "item": "ترک اعتیاد",
            "url": "/search/category-addiction-treatment-drugs/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f3c721e05b788e6d2715cf8f3bf8cccf626390e0_1624104207.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418008,
            "item": "تسکین درد",
            "url": "/search/category-pain-relief/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b91f4167055e6b1200c6a7bba648826d38cdc8ce_1693151503.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1418009,
            "item": "سیستم ایمنی",
            "url": "/search/category-Immune-system/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/01e69e57425451e11b8cdb63531bd15177ae1173_1620472326.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1420,
        "title": "مکمل ورزشی",
        "url": "/search/category-sports-and_fitness-supplements/",
        "items": [
          {
            "id": 1420001,
            "item": "پروتئین",
            "url": "/search/category-protein/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ab97244cf58774e6960a2b927daba854adf67089_1641022094.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1420002,
            "item": "آمینو اسید",
            "url": "/search/category-amino-acid/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/73cff44507108a902b0d128e02f78524af0690eb_1641910933.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1420003,
            "item": "کراتین",
            "url": "/search/category-keratin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5c82ed6388186dbef3836a1f89cbdd08b66b3208_1668517676.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1420004,
            "item": "مکمل افزایش وزن",
            "url": "/search/category-weight-gain-supplement/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/77b601c4d1e4b769e1d53547fdbdf8cb9202e46c_1602420202.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1420005,
            "item": "مکمل کاهش وزن",
            "url": "/search/category-weight-loss-supplement/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a0ca289ce68e52ed4b9801849de08deec5b37050_1632069059.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1729,
        "title": "ویتامین",
        "url": "/",
        "items": [
          {
            "id": 1729001,
            "item": "ویتامین C",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-vitamin-c/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/29855085b398bfd063bddeee0f6326f8bc8b659d_1720468047.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1729002,
            "item": "ویتامین D",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-vitamin-d/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1b57e34b297b760ad87d8b761d617fcf9feb5354_1681052886.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1729003,
            "item": "ویتامین B",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-vitamin-b/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a4f0b56241ce0a4c2222ac62374847c18c09951b_1620729879.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1729004,
            "item": "ویتامین D3",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-vitamin-d3/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/704447971efa2317607ba0a3e843ea5abf1a9228_1713257130.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1729005,
            "item": "ویتامین E",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-vitamin-e/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e2b0964d6225689b73e05e10d5529102ca6e10ec_1700034169.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1729006,
            "item": "ویتامین K",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-vitamin-k/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9d547d4365a7fed75637ff6620ce3c437206c69a_1663424600.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1729007,
            "item": "امگا ۳",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-omega-3/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/197fac385b0625587b31caf1f52128112ad26306_1653148437.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1749,
        "title": "مواد معدنی",
        "url": "/",
        "items": [
          {
            "id": 1749001,
            "item": "قرص آهن",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-iron/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1ad54c682fd1a9f23a75b78bb4b3f465dae772b3_1659793022.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749002,
            "item": "قرص کلسیم",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-calcium/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/743d9bf3a7b468a4a2125362202bac390778ebf1_1685004816.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749003,
            "item": "قرص منیزیم",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-magnesium/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/43842b94f14fb8aaab0d3892ebb905dbc6d7d904_1685896880.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749004,
            "item": "قرص کروم",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-chrome/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ed0f4b55240c2c15aa92b2b514a7bc44fd5d46fc_1620634429.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749005,
            "item": "قرص ید",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-iodine/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0144671d2d4c0dd30200a954589fe125ee25a9e9_1669900817.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749006,
            "item": "قرص زینک",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-zink/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/09e54b825ac028e17964018aae5c39ff6a11900f_1620033992.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749007,
            "item": "قرص سدیم",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-sodium/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/eac13f82a89b14b7ce5fb3da25268202f8204a2b_1666158011.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1749008,
            "item": "قرص روی",
            "url": "/search/facet/category-medical-supplement/type-of-vitamins-and-minerals-roy/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/730a49efa1d79565869d7c4007878a4208d3e48e_1660253549.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1416,
        "title": "ارتوپدی و کمک درمانی",
        "url": "/search/category-support/"
      },
      {
        "id": 1743,
        "title": "کنترل دیابت",
        "url": "/search/category-diabetes-control/",
        "items": [
          {
            "id": 1743001,
            "item": "دستگاه تست قند خون",
            "url": "/search/category-blood-sugar-meter/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/befed5c6bd45ec846c1bb8d705f78745315c8b4a_1693287422.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1743002,
            "item": "نوار تست قند خون",
            "url": "/search/category-blood-sugar-test-strip/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0beb2df62d0137647929c941d6dcaf5441151c63_1672227518.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1743003,
            "item": "سوزن تست قند خون",
            "url": "/search/category-blood-sugar-test-needle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d9fe1fad730ef728bb7942861e8e454504f081c2_1674047191.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1743004,
            "item": "سرنگ انسولین",
            "url": "/search/category-insulin-syringe/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/55223d7e68379efc8324e2cf1bb55c24698b30d8_1661153176.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1743005,
            "item": "کیف خنک نگه دارنده انسولین",
            "url": "/search/category-insulin-cooler-bag/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/99b9c6618abe56f422222a0cc24d27533fe44fa7_1620855158.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1417,
        "title": "لوازم پزشکی مصرفی",
        "url": "/search/category-consumable-medical-supplies/"
      },
      {
        "id": 1419,
        "title": "تجهیزات دندانپزشکی",
        "url": "/search/category-dental-equipment/"
      },
      {
        "id": 1758,
        "title": "ماساژور",
        "url": "/search/category-massagers/",
        "items": [
          {
            "id": 1758001,
            "item": "ماساژور دستی",
            "url": "/search/category-manual-massager/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3829068.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1758002,
            "item": "صندلی ماساژور",
            "url": "/search/category-massage-chair/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f5892f36165f3182c8fac4da32ffbe7df8dd761a_1701283724.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1758003,
            "item": "ماساژور برقی",
            "url": "/search/category-electric-massager/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7a6426dc37ef85684b9ea8e6480e48bb9261f572_1726172500.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "main-title": "کتاب، لوازم تحریر و هنر",
    "generalLink": "همه محصولات کتاب، لوازم تحریر و هنر",
    "url": "/main/book-and-media/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 285,
        "title": "کتاب و مجله",
        "url": "/search/category-book-and-magazines/",
        "items": [
          {
            "id": 285001,
            "item": "کتاب چاپی",
            "url": "/search/category-book/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f6be636dfd43299545884515c9007c73fac9c6cf_1685210449.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 285002,
            "item": "مجلات خارجی و داخلی",
            "url": "/search/category-magazines/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c57bfb9dac92b1003f9a330dbf96598587641cf2_1657724683.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 285003,
            "item": "شهر کتاب مشهد",
            "url": "/landing/mashhad-bookcity/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/07df7e8fa441447846225c3136da51f7a3b3de69_1638717421.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1641,
        "title": "محبوب‌ترین آثار",
        "url": "/",
        "items": [
          {
            "id": 1641001,
            "item": "کتاب های سعدی",
            "url": "/tags/saadi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/859959.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641002,
            "item": "کتاب های حافظ",
            "url": "/tags/hafez/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b926170a9bebdf5a4f7e71b218bd1fa55da3892d_1689603149.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641003,
            "item": "کتاب های خیام",
            "url": "/tags/Khayyam-book/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5d30e32e14cad2525c3aa318c82f543c423c1367_1668863638.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641004,
            "item": "کتاب های فردوسی",
            "url": "/tags/ferdowsi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3489284.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641005,
            "item": "کتاب های مولانا",
            "url": "/tags/molana/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/aed64f5a84cea2bb29b239d0f68eb8e456e5f4fc_1609679205.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641006,
            "item": "کتاب های شهریار",
            "url": "/tags/Shahriar's-books/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6ceec20573d509aca7ce8c72fc46e11697a59df6_1638257121.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641007,
            "item": "کتاب های فروغ فرخزاد",
            "url": "/tags/Forough's-book/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/110801604.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641008,
            "item": "کتاب های هوشنگ ابتهاج",
            "url": "/tags/hoshang-ebtehaj/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/412fd9e5ecc243bdda035f70809dcea582d57ed3_1658549047.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1641009,
            "item": "کتاب های سهراب سپهری",
            "url": "/tags/Sepehri's-book/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/46a4bc0adf4ab9d4b47ff27e2d71a3d238e113f3_1627224541.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 286,
        "title": "کتاب صوتی",
        "url": "/search/category-audio-book/"
      },
      {
        "id": 344,
        "title": "محتوای آموزشی",
        "url": "/search/category-multimedia-training-pack/",
        "items": [
          {
            "id": 344001,
            "item": "آموزش موسیقی",
            "url": "/search/category-music-training/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6ec4040e80c19269d8cdb8aaed28f16fe6622819_1609886207.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 344002,
            "item": "آموزش ورزش و سرگرمی",
            "url": "/search/category-sport-and-entertainment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/592067.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 344003,
            "item": "آموزش زبان",
            "url": "/search/category-language-learning-software/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/120121664.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 344004,
            "item": "آموزش نرم افزار و کامپیوتر",
            "url": "/search/category-software-computer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6e077173815a10ff0463d0ae4b981966a1ac8d05_1604236897.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 345,
        "title": "نرم افزار",
        "url": "/search/category-software/"
      },
      {
        "id": 346,
        "title": "بازی کنسول و کامپیوتر",
        "url": "/search/category-pc-game/"
      },
      {
        "id": 347,
        "title": "فیلم سینمایی، سریال و مستند",
        "url": "/search/category-film-video-content/"
      },
      {
        "id": 348,
        "title": "آلبوم موسیقی",
        "url": "/search/category-music-audio-content/"
      },
      {
        "id": 349,
        "title": "لوازم تحریر",
        "url": "/search/category-stationery/",
        "items": [
          {
            "id": 349001,
            "item": "لوازم اداری و اقلام مصرفی",
            "url": "/search/category-office-supplies/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/119127091.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349002,
            "item": "کیف، کوله پشتی و جامدادی",
            "url": "/search/category-bags-backpacks/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b90c1fb6038a795dc7a1e0d9ee5d5a46ce2b9574_1683537410.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349003,
            "item": "چراغ مطالعه",
            "url": "/search/category-light/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/771651.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349004,
            "item": "کاغذ کادو، پاکت و کارت هدیه",
            "url": "/search/category-gift-tools/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6c011f028096be72ab0954219f480de5db59d321_1676288468.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349005,
            "item": "نوشت افزار",
            "url": "/search/category-stationery-sub/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/52082696c0d11ec0fec582887913e747b2bab955_1638361237.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349006,
            "item": "دفتر و کاغذ",
            "url": "/search/category-paper-notebook/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1c841c7f22939994add07f2c765fe29cdf587f90_1667676448.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349007,
            "item": "خودکار و روان نویس",
            "url": "/search/category-pen/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/115638943.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349008,
            "item": "ابزار نقاشی و رنگ آمیزی",
            "url": "/search/category-drawing-painting-tools/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121355817.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 349009,
            "item": "میز تحریر",
            "url": "/search/category-writing-desk/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5090279.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 350,
        "title": "آلات موسیقی",
        "url": "/search/category-musicalinstruments/",
        "items": [
          {
            "id": 350001,
            "item": "لوازم جانبی آلات موسیقی",
            "url": "/search/category-musicinstrumentsaccessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2d997eae45a5ce977e456eaa9f3e8b61c55d4c9a_1610634634.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350002,
            "item": "گیتار",
            "url": "/search/category-guitar/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3ff5bd1854a59f72ba913bc6cd5acb4092fc00cb_1662469956.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350003,
            "item": "کیبورد و ارگ",
            "url": "/search/category-keybord-organ/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1104205.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350004,
            "item": "پیانو دیجیتال",
            "url": "/search/category-pianos/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0a6f267cf195fca5b6ee9281ec95d2e6ffd0f6bc_1659473676.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350005,
            "item": "درام، پرکاشن، دف",
            "url": "/search/category-percussion-instruments/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c9748574b706ddd011d5dcb50c0f0e581004f65e_1645614487.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350006,
            "item": "تجهیزات استودیویی",
            "url": "/search/category-studio-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d3a4bd99f1deaddfbef150a7c7eaa74d06059f98_1667811719.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350007,
            "item": "ویولن",
            "url": "/search/category-violin/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/dac2a87244fa555ecbb8ccffc6f37f289d9da79c_1658516094.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 350008,
            "item": "سازهای ایرانی",
            "url": "/search/category-tombak/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/46c61f98db86841f0057237ea61fcd4fbd0a7ca6_1692802195.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 351,
        "title": "فرش ماشینی، دستبافت، تابلو",
        "url": "/search/category-carpet/",
        "items": [
          {
            "id": 351001,
            "item": "فرش ماشینی",
            "url": "/search/category-machine-made-carpet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4095214.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 351002,
            "item": "فرش دستبافت",
            "url": "/search/category-handmade-carpet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9bdd4e83e0e44d9ccc980f9f19eba87b6a8f3700_1637497104.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 351003,
            "item": "تابلو",
            "url": "/search/category-pictorial-carpet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5646c241ed4135b9b5fdbfc1fdc051512826f915_1739608301.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 352,
        "title": "صنایع دستی",
        "url": "/search/category-handicraft/",
        "items": [
          {
            "id": 352001,
            "item": "کالاهای مس",
            "url": "/search/category-copper-products/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/775abad740e9fea0ba5511839fa45df10ebcc0a8_1666346066.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352002,
            "item": "سفال، سرامیک و چینی",
            "url": "/search/category-clay-and-ceramic/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/648836e747b6d6b7aaa929c416407816b0d18cda_1661540220.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352003,
            "item": "کیف چرمی",
            "url": "/search/category-leatherbag/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0266f2097c9333a37ee78f7b9dd1fec59090eaaf_1619728403.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352004,
            "item": "ترمه، قلمکار و دستبافت",
            "url": "/search/category-textile-industry/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7c97e226986879b4042aa9f3a099155608db5974_1651835336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352005,
            "item": "خاتم، منبت، حصیری و چوبی",
            "url": "/search/category-woodcraft/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/43feb3549861ea1a048e4447cdeb3a80dd5a6744_1660297759.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352006,
            "item": "تابلو و ساعت",
            "url": "/search/category-panel/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6a741bdacefb7daeedf31eb2010401837b37e252_1671888821.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352007,
            "item": "میناکاری",
            "url": "/search/category-enamels/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/26a4bcd08c8fe5268b1bd21c6a5e0b5896355dd7_1664521739.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352008,
            "item": "فیروزه کوبی",
            "url": "/search/category-turquoise-tattoo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/20a011d98e007c9402bec90012c4b22f321c0a92_1683539082.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 352009,
            "item": "سوزن دوزی",
            "url": "/search/category-needle-sewing/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/868a625ffd218b3e1bddebe60b37e0da5bd068fd_1618476289.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "main-title": "ورزش و سفر",
    "generalLink": "همه محصولات ورزش و سفر",
    "url": "/main/sport-entertainment/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 601,
        "title": "پوشاک ورزشی مردانه",
        "url": "/search/category-men-sportswear/"
      },
      {
        "id": 602,
        "title": "پوشاک ورزشی زنانه",
        "url": "/search/category-women-sportwear/"
      },
      {
        "id": 603,
        "title": "کفش ورزشی مردانه",
        "url": "/search/category-men-sport-shoes-/",
        "items": [
          {
            "id": 603001,
            "item": "کفش فوتبال",
            "url": "/tags/football-boots/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f8a2a3e2c37f7c4f0a42cb266db0b6901ef3e623_1689716086.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 603002,
            "item": "کفش فوتسال",
            "url": "/tags/futsal-shoes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ae81c5dc267569a51646417536d878fb6635d51b_1715600714.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 604,
        "title": "کفش ورزشی زنانه",
        "url": "/search/category-women-sport-shoes-/"
      },
      {
        "id": 605,
        "title": "پوشاک ورزشی پسرانه",
        "url": "/search/category-boys-sportswear/"
      },
      {
        "id": 606,
        "title": "پوشاک ورزشی دخترانه",
        "url": "/search/category-girls-sportswear/"
      },
      {
        "id": 607,
        "title": "کفش ورزشی پسرانه",
        "url": "/search/category-boys-sport-shoes/"
      },
      {
        "id": 608,
        "title": "کفش ورزشی دخترانه",
        "url": "/search/category-girls-sport-shoes/"
      },
      {
        "id": 609,
        "title": "تجهیزات سفر",
        "url": "/search/category-traveling-equipment/",
        "items": [
          {
            "id": 609001,
            "item": "ساک و چمدان",
            "url": "/search/category-trolley-case-and-luggage/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3ce5c403bb6f72aa967bf79850a1100321695995_1672465445.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 609002,
            "item": "کیف و کوله پشتی",
            "url": "/search/category-bag-and-backpack/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/796f8de630ff0888cbd629baed9cf56d17f44fac_1733815028.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 612,
        "title": "دوچرخه",
        "url": "/search/category-bicycle/",
        "items": [
          {
            "id": 612001,
            "item": "دوچرخه کودک",
            "url": "/search/facet/category-bicycles/designed-for-children/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/05dfad26637434f83acea29896891dd734b989b2_1688481265.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 612002,
            "item": "دوچرخه ۲۰",
            "url": "/search/facet/category-bicycles/bicycle-rims-size-20-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fdd2358980440ba6722ed319f66439c1044c5c92_1641372507.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 612003,
            "item": "دوچرخه ۲۴",
            "url": "/search/facet/category-bicycles/bicycle-rims-size-24-inch/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/769fba88bb5ba9402f2184153344be9b9ad46b00_1711211086.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 612004,
            "item": "دوچرخه برقی",
            "url": "/search/facet/category-bicycles/bicycles-types-electric/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7a83a8d9b882b7d07814d69ae8691593da236ec2_1732726602.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 612005,
            "item": "لوازم جانبی دوچرخه",
            "url": "/search/category-bicycles-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/66bef9287be9aee5b4df01906b49bf3f7ab3f22e_1640981925.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 614,
        "title": "کوهنوردی و کمپینگ",
        "url": "/search/category-hiking-and-camping/",
        "items": [
          {
            "id": 614001,
            "item": "کفش کوهنوردی",
            "url": "/tags/mountaineering-boots/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fed811a74770537cea302efa34ff96f8dfe47396_1697297707.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614002,
            "item": "عصای کوهنوردی",
            "url": "/search/category-staff/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e67c0f5c4900b74b5dd2b825a298f0c3986f12df_1632398836.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614003,
            "item": "چراغ قوه و چراغ پیشانی",
            "url": "/search/category-flashlight/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3a28fcbcde49377112877e16d68122dc6d0e7d6c_1658035858.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614004,
            "item": "چاقو و ابزار چندکاره",
            "url": "/search/category-camping-knife/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9a4bdca38d65fbdf9b7d798258401f782cc1d140_1624094622.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614005,
            "item": "قمقمه و فلاسک",
            "url": "/search/category-flask/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e2b8bd496553494ea398704f2696e6c5e5dcd117_1740148836.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614006,
            "item": "چادر",
            "url": "/search/category-tent/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9fb2a027f1f9efd4e5caf9d399127e22248e45de_1676805583.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614007,
            "item": "کیسه خواب",
            "url": "/search/category-sleeping-bag/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112928858.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614008,
            "item": "زیرانداز سفری",
            "url": "/search/category-mat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7dca331cc9a67bb025460495bb9e0befa2461d04_1658074843.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 614009,
            "item": "تجهیزات جانبی سفر و کمپینگ",
            "url": "/search/category-travel-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fe39e1a06659d2f0642344e9caf82ed671734732_1635802847.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 624,
        "title": "چتر",
        "url": "/search/category-umbrella-1/"
      },
      {
        "id": 625,
        "title": "ساک ورزشی",
        "url": "/search/duffles-and-gym-bags/"
      },
      {
        "id": 626,
        "title": "قمقمه و شیکر",
        "url": "/search/category-sport-entertainment/?q=%d8%b4%db%8c%da%a9%d8%b1&entry=mm"
      },
      {
        "id": 627,
        "title": "لوازم ورزشی",
        "url": "/search/category-sport/"
      },
      {
        "id": 628,
        "title": "ورزش های هوازی و بدنسازی",
        "url": "/search/category-aerobic/",
        "items": [
          {
            "id": 628001,
            "item": "تجهیزات جانبی ایروبیک و تناسب اندام",
            "url": "/search/category-stretching-tools/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/612313bd5f7b197da422f792215106fe3ed93656_1745919276.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 628002,
            "item": "دمبل",
            "url": "/search/category-dumbbell/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2534570.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 628003,
            "item": "طناب",
            "url": "/search/category-rope/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121659033.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 628004,
            "item": "بارفیکس",
            "url": "/search/category-pullup/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9f65e29d23c1ae4adb925bf0aec30be317cfb6ec_1674367258.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 628005,
            "item": "تردمیل",
            "url": "/search/category-treadmill/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/313b42c8313e974d7140aa600ef1a1bde0d4719b_1639856172.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 628006,
            "item": "لوازم پوششی و محافظتی ورزشی",
            "url": "/search/category-cover-and-safety-equipment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/111564022.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 635,
        "title": "ورزش های توپی",
        "url": "/search/category-ball-sports/",
        "items": [
          {
            "id": 635001,
            "item": "توپ",
            "url": "/search/category-ball/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1e65c014a29cddafbcdee4efd5041ba804864e91_1650263690.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 635002,
            "item": "راکت",
            "url": "/search/category-racquet/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5d7aefa3bc0256578b5911420e49c653ab1ff045_1668489846.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 638,
        "title": "ورزش های آبی",
        "url": "/search/category-water-games/"
      },
      {
        "id": 639,
        "title": "ورزش های رزمی",
        "url": "/search/category-martial-arts/"
      },
      {
        "id": 640,
        "title": "اسکوتر برقی",
        "url": "/search/category-sports-hoverboard/"
      },
      {
        "id": 641,
        "title": "اسکیت و اسکوتر",
        "url": "/search/category-skate/"
      }
    ]
  },
  {
    "id": 13,
    "main-title": "کارت هدیه و گیفت کارت",
    "generalLink": "همه محصولات کارت هدیه و گیفت کارت",
    "url": "/main/dk-ds-gift-card/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 794,
        "title": "کارت هدیه فیزیکی دیجی کالا",
        "url": "/search/category-digikala-gift-card/"
      },
      {
        "id": 796,
        "title": "کارت هدیه براساس مناسبت",
        "url": "/search/category-digikala-gift-card/?types%5B0%5D=7619"
      },
      {
        "id": 809,
        "title": "کارت هدیه براساس قیمت",
        "url": "/search/category-digikala-gift-card/?sort=20"
      },
      {
        "id": 795,
        "title": "کارت هدیه الکترونیکی دیجی کالا",
        "url": "/search/category-e-gift/"
      },
      {
        "id": 817,
        "title": "کارت هدیه الکترونیکی براساس مناسبت",
        "url": "/search/category-e-gift/?sort=1"
      },
      {
        "id": 818,
        "title": "کارت هدیه سازمانی",
        "url": "/landing/corporate-gift-cards/"
      },
      {
        "id": 819,
        "title": "کارت هدیه مد و پوشاک",
        "url": "/product-list/plp_44134214/"
      },
      {
        "id": 820,
        "title": "کارت هدیه اکسسوری مد و پوشاک",
        "url": "/product-list/plp_44134341/"
      },
      {
        "id": 821,
        "title": "کارت هدیه دیجی استایل",
        "url": "/search/category-digistyle-gift-card/"
      },
      {
        "id": 822,
        "title": "کارت هدیه فیدیبو",
        "url": "/promotion-page/plp_47132471/"
      },
      {
        "id": 1466,
        "title": "گیفت کارت اپلیکیشن و نرم افزار",
        "url": "/search/category-application-and-software-giftcard/"
      },
      {
        "id": 1467,
        "title": "گیفت کارت پلتفرم‌های بازی",
        "url": "/search/category-gaming-platforms-giftcard/"
      },
      {
        "id": 1470,
        "title": "گیفت کارت پرداخت‌های درون بازی",
        "url": "/search/category-in-game-payments-giftcard/"
      },
      {
        "id": 1468,
        "title": "گیفت کارت فروشگاه آنلاین",
        "url": "/search/category-online-shop-giftcard/"
      },
      {
        "id": 1469,
        "title": "گیفت کارت فیلم و سریال",
        "url": "/search/category-movie-and-series-giftcard/"
      },
      {
        "id": 1568,
        "title": "طلای دیجیتال",
        "url": "/gold/?utm_source=dk&utm_medium=mega_menu&hideHeader=1"
      }
    ]
  },
  {
    "id": 14,
    "main-title": "سوپر مارکت آنلاین",
    "generalLink": "همه محصولات سوپر مارکت آنلاین",
    "url": "/main/food-beverage/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 223,
        "title": "کالاهای اساسی و خواربار",
        "url": "/search/category-groceries/",
        "items": [
          {
            "id": 223001,
            "item": "ماکارونی",
            "url": "/search/category-spaghetti-pasta/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2b13db52a9c13444b7b3aa5cbed95076afbad10e_1657598739.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 223002,
            "item": "برنج",
            "url": "/search/category-rice/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e5e1041462fbd700f16b7f4cf1581e57ffa9208d_1638864218.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 223003,
            "item": "نبات",
            "url": "/search/category-candy/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/111999265.png?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 223004,
            "item": "قند",
            "url": "/search/category-sugar-cube/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6d5abb27a441aaf3ca7386b97ceceafc777bc3bb_1677531804.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 223005,
            "item": "شکر",
            "url": "/search/category-sugar/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/46a917b5c389f5685332971e5c3714c09cfbd5d8_1631777049.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 223006,
            "item": "رب گوجه",
            "url": "/search/category-tomato-paste/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c337effc4fd1a1bd99f7790293470ec34c39889a_1657543886.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 223007,
            "item": "رب انار",
            "url": "/search/category-pomegranate-paste/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/533fd0385d1be54dcc8e9acd8ca0c6904527ed50_1692017864.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1064,
        "title": "روغن",
        "url": "/search/category-oil/",
        "items": [
          {
            "id": 1064001,
            "item": "روغن مایع",
            "url": "/search/category-liquid-sunflower-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7588cc50c925e29b5dcc186901393927dc4269d9_1652622666.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1064002,
            "item": "روغن جامد و نیمه جامد",
            "url": "/search/category-solid-semi-solid-vegetable-oils/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/87ad7f0e8b0ad4b3bc536cfa82a6c0b378fd9020_1714485493.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1064003,
            "item": "روغن زیتون",
            "url": "/search/category-olive-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/544e2296232f7b204692cbac4742d370905f93c4_1613887039.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1064004,
            "item": "روغن ذرت",
            "url": "/search/category-corn-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/70417d031914beabc7836cce618cc65bfa17ac7c_1701027073.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1064005,
            "item": "روغن کنجد",
            "url": "/search/category-sesame-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8b6666e4d520ebb5740e2b4e3beeed7ca3f23fb4_1633189682.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1064006,
            "item": "روغن حیوانی",
            "url": "/search/category-animal-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f4786bd6b82056308e6205c8e099f869c14afb88_1691322723.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1065,
        "title": "چای و دمنوش",
        "url": "/search/category-tea/"
      },
      {
        "id": 1066,
        "title": "قهوه",
        "url": "/search/category-coffee/",
        "items": [
          {
            "id": 1066001,
            "item": "دانه قهوه",
            "url": "/search/category-coffee-bean/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/89179c57810a24b88366572041e03abc6f751148_1730807544.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1066002,
            "item": "قهوه فوری",
            "url": "/search/category-instant-coffee/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4080295.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1066003,
            "item": "قهوه اسپرسو",
            "url": "/search/category-espresso-coffee/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/46f8a08e5cb7effb6219e9951722803fa0b5b67e_1730799706.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 229,
        "title": "غذاهای آماده و نیمه آماده",
        "url": "/search/category-ready-made-canned-food/",
        "items": [
          {
            "id": 229001,
            "item": "تن ماهی",
            "url": "/search/category-tuna-fish/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1bd1b1cc911430290963459a6c66c6c0e59269df_1669621828.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 229002,
            "item": "نودل",
            "url": "/search/category-noodles/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/113558836.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 229003,
            "item": "غذاهای آماده کنسروی",
            "url": "/search/category-pre-cooked-meals/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2873c722ee465df610d2b074684774b80c8c2195_1690006235.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1067,
        "title": "حبوبات و سویا",
        "url": "/search/category-cereals-soy/"
      },
      {
        "id": 1068,
        "title": "ادویه و افزودنی",
        "url": "/search/category-spices-seasonings/",
        "items": [
          {
            "id": 1068001,
            "item": "زعفران",
            "url": "/search/category-saffron/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6456a8171c8e18887ab10e7440fe45a1c87586f7_1626351146.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1068002,
            "item": "زرشک",
            "url": "/search/category-barberries/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ca6c2e91a7fab26e0364aa6e007b84f2eeb6f793_1695714697.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1068003,
            "item": "فلفل",
            "url": "/search/category-pepper/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/178e5dea38c88bbacf74cc33af8216c62748fb74_1629187492.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1068004,
            "item": "نمک",
            "url": "/search/category-salt/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2790394.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1068005,
            "item": "هل",
            "url": "/search/category-true-cardamom/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/111999050.png?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1068006,
            "item": "زنجبیل",
            "url": "/search/category-ginger/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/114085872.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1068007,
            "item": "زردچوبه",
            "url": "/search/category-easoning/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7e95ebb9872be1459627fae63d70bc0a39611f87_1703829381.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 224,
        "title": "صبحانه",
        "url": "/search/category-breakfast/",
        "items": [
          {
            "id": 224001,
            "item": "کره بادام زمینی",
            "url": "/search/category-peanut-butter/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/dd4fe562ce47b76ceac60722b39c56e5a94b55f3_1636824744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 224002,
            "item": "شکلات صبحانه",
            "url": "/search/category-breakfast-chocolates/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4d22db22632f6e0a810b66d6f8e5914897043f9a_1630573329.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 224003,
            "item": "غلات صبحانه",
            "url": "/search/category-breakfast-cereal/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ced853adaf0f0997aa7281c8feb88efcfe5b5f45_1595252211.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 224004,
            "item": "عسل",
            "url": "/search/category-honey/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7b039f1fee501420cab194939b5d7b043c4be8c0_1687169951.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 227,
        "title": "نوشیدنی",
        "url": "/search/category-beverages/",
        "items": [
          {
            "id": 227001,
            "item": "شیر کاکائو",
            "url": "/search/facet/category-favored-milk/flavour-cocoa/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/18db45ce157a3af48d1a2eb39cde94ea0ba0213d_1678526677.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 227002,
            "item": "آب معدنی",
            "url": "/search/category-mineral-water/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/23d55042b2e7a7b1fcbd9127417fa2d5a6a00d1a_1629097765.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 227003,
            "item": "نوشابه",
            "url": "/search/category-soft-drink/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2500c4009e47044dd7e598500af1fd7d6aafeabc_1738748859.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 227004,
            "item": "ماء الشعیر",
            "url": "/search/category-non-alcoholic-beer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a85c6bb9f835afa01202f435642b019367308261_1687096515.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 227005,
            "item": "انرژی زا",
            "url": "/search/category-sport-energy-drink/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1c3e77b04198c15805f36bc0e7693f2454eb60a0_1622281901.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 227006,
            "item": "شربت و آبمیوه",
            "url": "/search/category-fruit-juice/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/57c9f68673cee00b7b931d2b87226edbff03111a_1723962047.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1069,
        "title": "ترشی و شور",
        "url": "/search/category-salts-and-pickles/"
      },
      {
        "id": 231,
        "title": "تنقلات",
        "url": "/search/category-snacks/",
        "items": [
          {
            "id": 231001,
            "item": "چیپس",
            "url": "/search/category-chips/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/624ecfcac34ec56504a8027b2ee67062518cc691_1733570071.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231002,
            "item": "پفک",
            "url": "/search/category-cheese-puffs/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5551710.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231003,
            "item": "تخمه",
            "url": "/search/category-nuts-trail-mix/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/39b06c34e103311e90d0001ba1d460e54a23a82a_1608219169.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231004,
            "item": "لواشک",
            "url": "/search/category-fruit-rolls/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ea5533188d505881c838f4c78178b977cfa7e5b4_1645649647.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231005,
            "item": "کیک و کلوچه",
            "url": "/search/category-cookies/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c034811e6ab933c8370c2e12ba5d316ee0f7323f_1614779853.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231006,
            "item": "شکلات",
            "url": "/search/category-chocolate-and-cocoa-products/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d359edd8233e48921b62c81771590fd2cf1f4ba6_1644600346.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231007,
            "item": "پاستیل",
            "url": "/search/category-gummi-candy/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c145e1ef061f55c8b7d5a33b6b85314a5cff1fca_1740399846.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231008,
            "item": "آدامس",
            "url": "/search/category-chewing-gum-breath-fresheners/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/61598431445dfdb269d169d51b2261376bee5a8f_1670917763.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 231009,
            "item": "بیسکویت",
            "url": "/search/category-biscuits-wafers/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5550878.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1070,
        "title": "آجیل",
        "url": "/search/category-dried-fruit-nut/",
        "items": [
          {
            "id": 1070001,
            "item": "فندق",
            "url": "/search/category-hazelnuts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4af47bdced8187f1c0ef01ecd92fea96d31cd332_1636813949.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1070002,
            "item": "پسته",
            "url": "/search/category-pistachio/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b1abdb9404fc7b5e4fdb137b570c39a5732aba10_1633003139.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1070003,
            "item": "بادام درختی",
            "url": "/search/category-almond/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/db9a241e7c251cdc01d670f763645aae19525597_1614853982.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1070004,
            "item": "بادام هندی",
            "url": "/search/category-cashew/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/840cd5e448e0db08df870cd973336ce1a99b9c68_1646250135.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1070005,
            "item": "بادام زمینی",
            "url": "/search/category-peanuts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/367910a3d24f4443c4dacbdb02c9704d6c511cfc_1621759784.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1070006,
            "item": "انجیر",
            "url": "/search/category-fig/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c7fb38b7428a7fcdd8224ce0354ff23061741469_1645596526.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1162,
        "title": "شیرینی",
        "url": "/search/category-sweets/"
      },
      {
        "id": 233,
        "title": "خشکبار",
        "url": "/search/category-dried-fruit-nuts/"
      },
      {
        "id": 225,
        "title": "مواد پروتئینی و تخم مرغ",
        "url": "/search/category-protein-foods/",
        "items": [
          {
            "id": 225001,
            "item": "خاویار",
            "url": "/search/category-caviar/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c6c09a0cea2f7ff5e899f04bf5af93f253f19ed3_1610539533.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 225002,
            "item": "سوسیس",
            "url": "/search/category-sausages/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/119807064.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 228,
        "title": "میوه و سبزیجات",
        "url": "/search/category-fruits-and-vegetables/"
      },
      {
        "id": 1071,
        "title": "بهداشت و نظافت خانگی",
        "url": "/search/category-home-hygiene/",
        "items": [
          {
            "id": 1071001,
            "item": "اسکاچ و سیم ظرفشویی",
            "url": "/search/category-scouringpad/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cf348b5fee73cdc14868152ec17c4c408295953f_1619262331.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1071002,
            "item": "دستکش نظافت",
            "url": "/search/category-glove/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121448755.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1071003,
            "item": "مواد شوینده",
            "url": "/search/category-detergents/",
            "image": "https://dkstatics-private.digikala.com/digikala-products/b44bfe94125fba608d9b0b92465ce8533894e67c_1630934590.jpg?OSSAccessKeyId=LTAIPClJziKGRUZJ&Expires=1941974591&Signature=qxbwh9K%2BcW%2F1VEpyw6c9YfX3j34%3D"
          },
          {
            "id": 1071004,
            "item": "شوینده لباس",
            "url": "/search/category-clothes-detergents/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/41cc534bba6d5f3e3b6ec57cde8e58e7ebd3bc62_1700992601.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1071005,
            "item": "شوینده ظروف",
            "url": "/search/category-dishes-detergents/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/58ec88aa5e086628d96cd7a4153e2a7e3a4b1cb9_1731935377.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1071006,
            "item": "شوینده سطوح",
            "url": "/search/category-surface-cleaner/",
            "image": "https://dkstatics-private.digikala.com/digikala-products/b44bfe94125fba608d9b0b92465ce8533894e67c_1630934590.jpg?OSSAccessKeyId=LTAIPClJziKGRUZJ&Expires=1941974591&Signature=qxbwh9K%2BcW%2F1VEpyw6c9YfX3j34%3D"
          },
          {
            "id": 1071007,
            "item": "مایع دستشویی",
            "url": "/search/category-washing-liquid/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/234cc84c35d96a16dfbbb1c8943ea52c5a0416bc_1714890311.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1071008,
            "item": "شوینده فرش و مبل",
            "url": "/search/category-carpet-and-furniture-shampoo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/70cdce482504aa79529db86e626128779b770e23_1739360097.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1071009,
            "item": "لوازم یکبار مصرف آشپزخانه",
            "url": "/search/category-disposablecontainer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4870567.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1072,
        "title": "بهداشت و خوراک کودک",
        "url": "/search/category-baby-and-mother/",
        "items": [
          {
            "id": 1072001,
            "item": "غذای کودک",
            "url": "/search/category-baby-foods/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b1ef9d84d6470cff08debb1d7edb3f2d8fa7f810_1704115492.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072002,
            "item": "پوشک کودک",
            "url": "/search/category-diaper/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1212b39aeac26262c79796a90274e4a01ef85e04_1745742515.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072003,
            "item": "دهانشویه و خمیردندان کودک",
            "url": "/search/category-children-and-baby-toothpaste/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/756aa748e4167199225240d164d8d7ac87a6fc7c_1643370253.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072004,
            "item": "مسواک کودک",
            "url": "/search/category-baby-toothbrush/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5241989.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072005,
            "item": "دستمال مرطوب کودک",
            "url": "/search/category-babywetwipes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5188ea3a30c6a8ad470dd237f2794acc9eb6ea42_1629196356.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072006,
            "item": "کرم،‌ بالم و لوسیون کودک",
            "url": "/search/category-creams-balms-and-lotions/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/92e1b816da486bd4f4f53c498b159b1dc3b145ba_1690621016.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072007,
            "item": "شامپو کودک",
            "url": "/search/category-baby-shampoo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1175379.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1072008,
            "item": "شوینده لباس کودک",
            "url": "/search/category-cloths-cleaner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/374d01d7c3a7a4f8276de12e8cc3a25da9b5d32e_1700305536.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1074,
        "title": "بهداشت شخصی",
        "url": "/search/category-personal-hygiene/"
      }
    ]
  },
  {
    "id": 15,
    "main-title": "اسباب بازی، کودک و نوزاد",
    "generalLink": "همه محصولات اسباب بازی، کودک و نوزاد",
    "url": "/main/mother-and-child/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 392,
        "title": "بهداشت و حمام کودک و نوزاد",
        "url": "/search/category-health-and-bathroom-tools/",
        "items": [
          {
            "id": 392001,
            "item": "پوشک",
            "url": "/search/category-diaper/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/91307c19429c7b5bbec2249d1353af2c018a7427_1702724910.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 392002,
            "item": "دستمال مرطوب",
            "url": "/search/category-wet-wipes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/880748.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 392003,
            "item": "حوله",
            "url": "/search/category-baby-towel/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9fc84564ef1d4383a69242f81a5ed69bc72c3b11_1663265126.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 392004,
            "item": "وان حمام نوزاد",
            "url": "/search/category-baby-bath-tub/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a3bd53e74cde465607d4f18490751508a6fe0633_1611487549.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 392005,
            "item": "مینی واش",
            "url": "/search/category-diaper-cleaner/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/113484626.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 392006,
            "item": "شامپو کودک و نوزاد",
            "url": "/search/category-baby-shampoo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/50e3578d3e593a769f9deb70a18c7b5b412649e4_1739361410.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 393,
        "title": "پوشاک و کفش کودک و نوزاد",
        "url": "/search/category-kids-apparel/",
        "items": [
          {
            "id": 393001,
            "item": "لباس نوزادی",
            "url": "/search/category-kids-clothes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/121296290.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 393002,
            "item": "کفش",
            "url": "/search/category-boys-shoes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0294fa48172682f5d2e390f29f184120f44cab9b_1681218542.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 393003,
            "item": "جوراب و پاپوش کودک و نوزاد",
            "url": "/search/category-kids-socks-/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0d6f1243cb9cad10b2d84728e587b0ff8fb3f080_1628419846.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 393004,
            "item": "کلاه و پیش بند نوزاد",
            "url": "/search/category-kids-napkin-and-apron/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/048e01510690ed70783536d91e52223d8fef9f21_1677844926.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1489,
        "title": "پوشاک بچگانه",
        "url": "/search/category-kids-apparel/",
        "items": [
          {
            "id": 1489001,
            "item": "پوشاک پسرانه",
            "url": "/search/category-boys-clothing/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0dcd2bba66f232a0e260c7968610c2a8d9534890_1673087697.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489002,
            "item": "لباس پسرانه",
            "url": "/search/category-boys-clothes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/120112176.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489003,
            "item": "لباس و کفش ورزشی پسرانه",
            "url": "/search/category-boys-sports/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fde94b62e65b6001385165ddb341e9d5ba8687d2_1720440676.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489004,
            "item": "کفش پسرانه",
            "url": "/search/category-boys-shoes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9744d6eb78b03148c330917bfd14d130c342c905_1697623453.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489005,
            "item": "کوله پشتی پسرانه",
            "url": "/search/category-boys-backpacks/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d388853789e9a3e0b8a55e074486fedbec3ef28a_1699364777.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489006,
            "item": "لباس دخترانه",
            "url": "/search/category-girls-clothes/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/42ba18601813049e73813d23408a6b495c053b9b_1680912632.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489007,
            "item": "کفش دخترانه",
            "url": "/search/category-girls-footwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f6f7e44e32fb6980fdee618eba5b2163030344a4_1711438210.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1489008,
            "item": "کوله پشتی دخترانه",
            "url": "/search/category-girls-backpacks/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f59bd96b5e9501aceadbdf06a8b0b5c64f2e9ccc_1706262895.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 394,
        "title": "تبلت",
        "url": "/search/category-tablet/"
      },
      {
        "id": 395,
        "title": "پلی استیشن، ایکس باکس و بازی",
        "url": "/search/category-game-console/"
      },
      {
        "id": 396,
        "title": "اسباب بازی",
        "url": "/search/category-toys/",
        "items": [
          {
            "id": 396001,
            "item": "فکری و آموزشی",
            "url": "/search/category-intellectual-and-educational/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e3ce9c627823fd19f7b6627ce059c889e2bd556a_1630784095.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 396002,
            "item": "پازل، لگو و ساختنی",
            "url": "/search/category-puzzle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ed38b3f1cecfea1d1d8b43080eef749d0a7a8dbf_1646311946.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 396003,
            "item": "عروسک و فیگور",
            "url": "/search/category-toy-and-model/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7cdbc7a538a6198c2f6149807b39e1d3d17723be_1639244595.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 396004,
            "item": "اسپینر، ابزار شوخی و سرگرمی",
            "url": "/search/category-humor-and-entertainment/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/112636721.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 396005,
            "item": "تفنگ، تیر و لوازم جنگی",
            "url": "/search/category-guns-and-combat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b543dc50e6d1d66d84d39e1358e9b27543f7b531_1637139948.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 397,
        "title": "بازی و سرگرمی کودک",
        "url": "/search/category-entertainment-and-games-equipment/",
        "items": [
          {
            "id": 397001,
            "item": "ماشین بازی، موتور و سه چرخه",
            "url": "/search/category-tricycle-and-motorcycle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/155814aa4a5117227be2d7070cffd1b789979c5b_1690804371.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 397002,
            "item": "دوچرخه",
            "url": "/search/category-bicycles/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2b1c2cb6cb48161006c856876991cda4020d1f92_1675799375.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 397003,
            "item": "تشک بازی و پارک بازی",
            "url": "/search/category-play-gym/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1891019.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 397004,
            "item": "تاب و سرسره",
            "url": "/search/category-swings-and-slides/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1420179.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 398,
        "title": "سلامت، ایمنی و مراقبت",
        "url": "/search/category-safety-and-care/",
        "items": [
          {
            "id": 398001,
            "item": "تصفیه هوا",
            "url": "/search/category-air-purifier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c7b715b03518fed3d44b2513f36ac901dcb27f84_1740297569.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 398002,
            "item": "ترازو",
            "url": "/search/category-digital-scale/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/afc28ab441fa83c454da0a9c97fe0c4794214533_1610369541.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 398003,
            "item": "دوربین و پیجر اتاق کودک",
            "url": "/search/category-baby-monitor-and-pager/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ca3db04fa417c2594dd32038d7b80af86b6f5ef0_1687350833.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 398004,
            "item": "تب سنج و دماسنج",
            "url": "/search/category-baby-thermometer/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/302827.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 398005,
            "item": "محافظ و ابزار ایمنی",
            "url": "/search/category-safety-tools-for-children-and-babies/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b328de78f86c580a5748dfd49bbd53f9d03aaa47_1655819658.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 399,
        "title": "خواب کودک",
        "url": "/search/category-baby-bedding/",
        "items": [
          {
            "id": 399001,
            "item": "مبلمان اتاق کودک",
            "url": "/search/category-childrens-bedroom-furniture/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/52627b8c9af49d4a675bfc3eff1dbc6bafec59f7_1629542437.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 399002,
            "item": "چراغ خواب کودک",
            "url": "/search/category-baby-decorative-lamp/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/114804207.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 399003,
            "item": "تشک کودک",
            "url": "/search/category-baby-mat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b6aeb97b0a587efea3365eda0d176547c3b80326_1682866773.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 399004,
            "item": "سرویس خواب",
            "url": "/search/category-bed-set/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fd873113918f2dd1758230b6cbcb29ffe3de8271_1656438122.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 399005,
            "item": "پتو",
            "url": "/search/category-blanket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5557131.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 399006,
            "item": "بالش شیردهی",
            "url": "/search/category-feeding-pillow/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f8a2a193ef22158a711a679a344fd0976dfd0bf8_1627384923.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 1532,
        "title": "داغ ترین ها",
        "url": "/search/category-entertainment-and-games-equipment/",
        "items": [
          {
            "id": 1532001,
            "item": "عروسک سالیوان",
            "url": "/tags/salivan/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/fc01c5752ea32eb5e15e32a25efe05321b348122_1692863658.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1532002,
            "item": "عروسک پاندا",
            "url": "/tags/panda-doll/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1471ecdecb81d2660cdcdd59f71566e4b4da5a22_1699111895.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1532003,
            "item": "بازی منچ",
            "url": "/tags/ludo/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1371945.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1532004,
            "item": "کیمدی شاپ",
            "url": "/brand/kimdi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/55e4115835e2fc317a7779b16a43cc419cbd3da8_1732370647.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1532005,
            "item": "کیمدی امضا شده",
            "url": "/tags/signed-kimdi/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ee39603203fb38b9b353ddb0aab2823ac842a2f4_1731146030.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 1532006,
            "item": "خمیر بازی",
            "url": "/tags/play-doh/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/298b0a7557e8e5630a37530b4587d8edb6898394_1646741891.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 400,
        "title": "ملزومات گردش و سفر",
        "url": "/search/category-promenade-and-travel-accessories/",
        "items": [
          {
            "id": 400001,
            "item": "کالسکه و کریر",
            "url": "/search/category-stroller-and-carrier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c654cb23f6e156bef7d74f6c65e64fe980b8496d_1677317963.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 400002,
            "item": "صندلی خودرو کودک و نوزاد",
            "url": "/search/category-chair-species/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a05e0273e2889f683de0a6798f76b20db44c522f_1635236821.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 400003,
            "item": "ساک لوازم نوزاد",
            "url": "/search/category-diaper-bag/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4e98f9229e0fce9d90c2dcf7c36367c4eeb545f9_1659589330.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 400004,
            "item": "لوازم جانبی گردش و سفر",
            "url": "/search/category-children-and-baby-promenade-and-travel-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1aba2c343ab7b1df28450e05d9a91ae3a52a8498_1664697060.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 400005,
            "item": "آغوشی",
            "url": "/search/category-baby-carrier/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/da26aba865943d34408590ebcb1be9798e92b3f5_1636802996.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 401,
        "title": "لوازم شخصی",
        "url": "/search/category-personal-accessories/",
        "items": [
          {
            "id": 401001,
            "item": "پستانک و ملزومات",
            "url": "/search/category-pacifier-and-accessories/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f7c49e775c0d830a39337ee180e449f8ba0c7afb_1671283487.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 401002,
            "item": "شیردوش",
            "url": "/search/category-milking/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8e3cc37dba345435e76248770edf1ce27b3de571_1662528558.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 401003,
            "item": "شورت آموزشی",
            "url": "/search/category-training-short/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bd2279114e24e456205ba03b028f33257d23e316_1661949017.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 402,
        "title": "غذا خوری",
        "url": "/search/category-dining-accessories/",
        "items": [
          {
            "id": 402001,
            "item": "صندلی غذاخوری",
            "url": "/search/category-booster-seat/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ddae7ea6a31f38bfa1153fd3b90ce84dbcc2eb3f_1636521728.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 402002,
            "item": "شیشه شیر، سرلاک و داروخوری",
            "url": "/search/category-baby-bottle/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/7bea60d953f567f81416331273c4328e80a854c5_1604841466.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "main-title": "محصولات بومی و محلی",
    "generalLink": "همه محصولات محصولات بومی و محلی",
    "url": "/main/rural-products/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 288,
        "title": "مواد غذایی ارگانیک",
        "url": "/search/category-rural-food-and-beverage/"
      },
      {
        "id": 289,
        "title": "خواروبار محلی",
        "url": "/search/category-rural-groceries/",
        "items": [
          {
            "id": 289001,
            "item": "برنج محلی",
            "url": "/search/category-rural-rice/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/63238bfd25e12cf26a0eb3778de6c9ef8e83ca13_1656429630.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 289002,
            "item": "روغن محلی",
            "url": "/search/category-rural-oil/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1075ffdb516e217cf8eba2231ef5789a937e4e5b_1659205485.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 290,
        "title": "صبحانه محلی",
        "url": "/search/category-rural-breakfast/",
        "items": [
          {
            "id": 290001,
            "item": "عسل طبیعی",
            "url": "/search/category-rural-honey/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/c960a774d55f03dc3b1f83d423379eeb7a06e5e0_1672169322.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 290002,
            "item": "حلوا شکری، ارده و کنجد سنتی",
            "url": "/search/category-rural-halva-and-sesame/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f8300acaf651362732a702047e46e46fc1ae97c0_1681291646.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 293,
        "title": "کیک و شیرینی خانگی",
        "url": "/search/category-rural-sweets/",
        "items": [
          {
            "id": 293001,
            "item": "شیرینی خانگی",
            "url": "/search/category-homemade-sweets/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1289e88d451f3795929b2a2b2e8deed7ed755e3f_1688452849.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 293002,
            "item": "کیک و کلوچه محلی",
            "url": "/search/category-rural-cakes-and-cookies/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/89516d60c3beb9db9b3b7e5a9f1cf9d0a3f4fc93_1636202215.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 292,
        "title": "تنقلات خانگی",
        "url": "/search/category-rural-nuts-and-dried-fruits/",
        "items": [
          {
            "id": 292001,
            "item": "لواشک، برگه و آلوچه خانگی",
            "url": "/search/category-organic-fruit-leather-and-dried-fruit/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f46a8086661c745b973a5c732559455c12238a4c_1638884654.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 292002,
            "item": "تخمه و مغز طعم‌دار محلی",
            "url": "/search/category-rural-flavored-seeds-and-nuts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8ce439767dd73195cc742302b502222824f17f9b_1664375527.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 291,
        "title": "لبنیات سنتی",
        "url": "/search/category-rural-dairy/",
        "items": [
          {
            "id": 291001,
            "item": "کره گیاهی و حیوانی محلی",
            "url": "/search/category-rural-butter/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/4086d860d91d853117de7bc07501bd82b64245bc_1679373906.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 298,
        "title": "خشکبار و آجیل سنتی",
        "url": "/search/category-dried-fruits-nuts/",
        "items": [
          {
            "id": 298001,
            "item": "آجیل سنتی",
            "url": "/search/category-rural-nuts/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0c29127de021f8a5122e48920f8c8843b3181f4d_1687075307.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 298002,
            "item": "خرمای محلی",
            "url": "/search/category-rural-date/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/f61644907bf841354a7f71904f2159a7abf10f05_1684749920.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 297,
        "title": "غلات و حبوبات ارگانیک",
        "url": "/search/category-cereals-legumes/",
        "items": [
          {
            "id": 297001,
            "item": "غلات ارگانیک",
            "url": "/search/category-organic-cereals/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/34fdb099713bbb0f2e43c1e45f747b07e430dc56_1666123644.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 297002,
            "item": "حبوبات و سویا ارگانیک",
            "url": "/search/category-organic-beans-and-soy/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d5cc173b246c011432b7b28e4630497b40f7de26_1687705992.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 296,
        "title": "ادویه و چاشنی ارگانیک",
        "url": "/search/category-seasoning-spices/",
        "items": [
          {
            "id": 296001,
            "item": "ادویه‌های ارگانیک",
            "url": "/search/category-rural-flavors-and-spices/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/11c0696899fb5f1180385112ec532bfd7ddda935_1670408463.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 296002,
            "item": "زعفران و زرشک ارگانیک",
            "url": "/search/category-organic-rural-saffron-and-barberry/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/cbb952610c791d1afdb8c8dcd71a0e70c64d1fc6_1650394246.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 295,
        "title": "عطاری",
        "url": "/search/category-herbal/"
      },
      {
        "id": 294,
        "title": "ترشیجات و شور خانگی",
        "url": "/search/category-pickles-salt/"
      },
      {
        "id": 302,
        "title": "دکوراتیو سنتی",
        "url": "/search/category-rural-decorative/",
        "items": [
          {
            "id": 302001,
            "item": "لوستر و چراغ آویز دست ساز",
            "url": "/search/category-rural-hanging-lamp/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e17028cf9fe16ff938310862d5fd12d00b702989_1678086237.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302002,
            "item": "مجسمه دست ساز",
            "url": "/search/category-rural-sculpture/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/bf4312e699c32512fc79542d2bb005e58c2f0d9a_1619259136.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302003,
            "item": "گلدان دست ساز",
            "url": "/search/category-rural-flower-pot/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1d31e411cb53a4dc395c7918ea498391b3037ce0_1622549088.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302004,
            "item": "تابلو سنتی",
            "url": "/search/category-tableau/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/8756b0e593b18b64d9a1e094ea2813e9b5f41ee7_1642495876.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302005,
            "item": "ست هدیه سنتی",
            "url": "/search/category-rural-gift-set/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5b1c665f651491f1bbb6ed1e18e8b7dba480bef2_1674798533.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302006,
            "item": "ست هفت سین سنتی",
            "url": "/search/category-rural-haftsin-set/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/9c04d40974431a596bcf4b0a5b96ef81417c6cb2_1645861696.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302007,
            "item": "کاشی سنتی",
            "url": "/search/category-rural-tile/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/08ecdb3e12c052055daf0c4ab8524cbf484b6608_1660392795.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302008,
            "item": "آینه سنتی",
            "url": "/search/category-rural-mirror/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/a5bb0b9896dd572ce108930846c2c53e00c81a1e_1678083543.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 302009,
            "item": "محصولات بافتنی",
            "url": "/search/category-knitwear/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b2b24507204ba6bc57704da9042620ac1678c275_1660819035.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 301,
        "title": "خانه و کاشانه",
        "url": "/search/category-rural-home/"
      },
      {
        "id": 300,
        "title": "نوشیدنی‌های ارگانیک",
        "url": "/search/category-herbal-spirits-rose-water/",
        "items": [
          {
            "id": 300001,
            "item": "چای ارگانیک ایرانی",
            "url": "/search/category-rural-tea/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/b298e1cd3d72cd9ec70581c8cf43df764cc7ff88_1676537683.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 300002,
            "item": "دمنوش گیاهی",
            "url": "/search/category-rural-herbal-tea/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1eb7a3dc93758b57ee3b51191cbaf2e30c4227a1_1641395319.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 308,
        "title": "اکسسوری و زیورآلات دست ساز",
        "url": "/search/category-rural-accessories/"
      },
      {
        "id": 307,
        "title": "پوشاک بومی و محلی",
        "url": "/search/category-rural-cloth-and-apparel/"
      },
      {
        "id": 306,
        "title": "قالی و قالیچه",
        "url": "/search/category-rural-carpets-and-rugs/"
      },
      {
        "id": 305,
        "title": "ظروف سنتی",
        "url": "/search/category-rural-dishes/",
        "items": [
          {
            "id": 305001,
            "item": "آجیل خوری سنتی",
            "url": "/search/category-rural-nuts-pot/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/2047623d10e9dd9d2c97b1c3adb2ffd0446ef8b6_1683185306.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 305002,
            "item": "دیس و سینی سنتی",
            "url": "/search/category-rural-tray/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e065705c44c801ddecb31792311d8c3904cf623a_1660998643.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 305003,
            "item": "قندان سنتی",
            "url": "/search/category-rural-sugar-container/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/1af083a83d67e466ebe2aedd4d007148c575fe1d_1675276741.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 305004,
            "item": "بشقاب سنتی",
            "url": "/search/category-rural-plate/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/3aafc48f938f2090a469ebaa154d89a524695699_1676620616.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 305005,
            "item": "لیوان سنتی",
            "url": "/search/category-rural-glass/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/e232b5167bbb2f8b7580885b99462d517dfd71cf_1686690532.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 305006,
            "item": "دیگ و قابلمه سنتی",
            "url": "/search/category-rural-pot-dig/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/010921f61ff5ee47a9525f8bb1620db7f2a2d3bb_1687951990.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 304,
        "title": "لوازم آشپزخانه سنتی",
        "url": "/search/category-rural-kitchen-utensils/",
        "items": [
          {
            "id": 304001,
            "item": "سبد دستبافت",
            "url": "/search/category-rural-hand-made-basket/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/6c4ec78d9ecf4923228d9498a07e3bc61d3970d2_1670435146.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 304002,
            "item": "هاون سنتی",
            "url": "/search/category-rural-mortar/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/d841098cdbf058d1b47ddef26473f7cb69b61c9c_1669544607.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          },
          {
            "id": 304003,
            "item": "تخته سرو دست ساز",
            "url": "/search/category-rural-serve-board/",
            "image": "https://dkstatics-public.digikala.com/digikala-products/06f3e842666002b35203dbaf2608e33224044cc7_1680271035.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
          }
        ]
      },
      {
        "id": 303,
        "title": "رومیزی، رانر و زیربشقابی سنتی",
        "url": "/search/category-traditional-tablecloth-and-under-plate/"
      }
    ]
  },
  {
    "id": 17,
    "main-title": "کالای کارکرده",
    "generalLink": "همه محصولات کالای کارکرده",
    "url": "/landing/used/",
    "image": "/images/logo/megamenu/mobile.svg",
    "children": [
      {
        "id": 1601,
        "title": "موبایل کارکرده",
        "url": "/search/category-used-mobile/"
      },
      {
        "id": 1602,
        "title": "لپ‌تاپ کارکرده",
        "url": "/search/category-used-laptop/"
      },
      {
        "id": 1603,
        "title": "کنسول بازی کارکرده",
        "url": "/search/category-used-console/"
      },
      {
        "id": 1604,
        "title": "ساعت هوشمند کارکرده",
        "url": "/search/category-used-smartwatch/"
      }
    ]
  }
];