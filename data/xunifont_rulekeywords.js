/***********************************************************************************************
* 
* 规则专用名词：多语种切换
* 范围：通用
* 
************************************************************************************************/
//是否有定义
if (typeof (XRULEKEYWORDS) == 'undefined') { var XRULEKEYWORDS = {}; };

//初始化及扩展
$.extend(XRULEKEYWORDS, {
    "feimengguwenzifu": {
        "no": 1,
        "name": {
            "zh_rcn": "非蒙古文字符",
            "en_rus": "Non_Mongolian Character",
            "mn_rcn": "   "
        },
        "description": {
            "zh_rcn": "空格、非蒙文字符、行首 （不包括控制符 ）",
            "en_rus": "Space，Non-Mongoliangl-Character，head of line（Not include FVS）",
            "mn_rcn": "       ᠂    (    )"
        }
    },
    "mengguwenzifuchuan": {
        "no": 2,
        "name": {
            "zh_rcn": "蒙古文字符串",
            "en_rus": "Mongolian Character",
            "mn_rcn": "  "
        },
        "description": {
            "zh_rcn": "1820 （[] a ）-1842 （[] C ）、180A （[] NIRUGU ）, 不包括控制符",
            "en_rus": "",
            "mn_rcn": "1820 （ a ）-1842 （ C ）、180A （[] NIRUGU ）,    "
        }
    },
    "yuantoufuyin_bpfkK": {
        "no": 3,
        "name": {
            "zh_rcn": "圆头辅音[      ]",
            "en_rus": "Circle head consonant[      ]",
            "mn_rcn": "          "
        },
        "description": {
            "zh_rcn": "182A （[] b ）, 182B （[] p ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "yuantoufuyin_bphgfkK": {
        "no": 4,
        "name": {
            "zh_rcn": "圆头辅音[        ]",
            "en_rus": "Circle head consonant[        ]",
            "mn_rcn": "            "
        },
        "description": {
            "zh_rcn": "182A （[] b ）, 182B （[] p ）, 182C （[] h ）, 182D （[] g ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "feiyuantoufuyin_bpfkK": {
        "no": 5,
        "name": {
            "zh_rcn": "圆头辅音[      ]以外的辅音",
            "en_rus": "Circle head consonant excluding [      ]",
            "mn_rcn": "          "
        },
        "description": {
            "zh_rcn": "除了182A （[] b ）, 182B （[] p ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "en_rus": "",
            "mn_rcn": "182A （ b ）, 182B （ p ）, 1839 （ f ）, 183A （ k ）, 183B （ K ）   "
        }
    },
    "feiyuantoufuyin_bphgfkK": {
        "no": 6,
        "name": {
            "zh_rcn": "圆头辅音[        ]以外的辅音",
            "en_rus": "Circle head consonant excluding [        ]",
            "mn_rcn": "            "
        },
        "description": {
            "zh_rcn": "除了182A （[] b ）, 182B （[] p ）, 182C （[] h ）, 182D （[] g ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "en_rus": "",
            "mn_rcn": "182A （ b ）, 182B （ p ）, 182C （ h ）, 182D （ g ）, 1839 （ f ）, 183A （ k ）, 183B （ K ）  "
        }
    },
    "yuanyinaqianfenxiefuyin": {
        "no": 7,
        "name": {
            "zh_rcn": "元音 [] 前分写辅音",
            "en_rus": "Separate consonant in front of vowel []",
            "mn_rcn": "    "
        },
        "description": {
            "zh_rcn": "后面接的1820（a）时可以加180E分开写的辅音。有1827 （[] n ）182C （[] h ） （阳性元音前 ）,182D （[] g ） （阳性元音前 ）, 182E （[] m ）, 182F （[] l ）, 1830 （[] s ）, 1831 （[] x）, 1835 （[] j）,1836 （[] y）, 1837 （[] r ）, 1838 （[] W ）",
            "en_rus": "",
            "mn_rcn": "        ᠃ 1827 （ n ） 182C（ h ） （    ）, 182D （ g ）（    ）, 182E （ m ）, 182F （ l ）, 1830 （ s ）, 1831 （ x）, 1835 （ j）, 1836（ y）, 1837 （ r ）, 1838 （ W ） "
        }
    },
    "yuanyineqianfenxiefuyin": {
        "no": 8,
        "name": {
            "zh_rcn": "元音 [] 前分写辅音",
            "en_rus": "Separate consonant in front of vowel [  ]",
            "mn_rcn": "    "
        },
        "description": {
            "zh_rcn": "后面接的1821 （[] e ）时可以加180E分开写的辅音。有1827 （[] n ）, 182E （[] m ）, 182F （[] l ）,1830 （[] s ）, 1831 （[] x ）, 1835 （[] j ）, 1836 （[] y ）, 1837 （[] r ）, 1838 （[] W ）",
            "en_rus": "",
            "mn_rcn": "       ᠃ 1827 （ n ）, 182E （ m ）, 182F （ l ）, 1830 （ s ）, 1831（ x ）, 1835 （ j ）, 1836 （ y ）, 1837 （ r ）, 1838 （ W ） "
        }
    },
    "mengguwenfuyin": {
        "no": 9,
        "name": {
            "zh_rcn": "蒙古文辅音",
            "en_rus": "Mgl-Consonant",
            "mn_rcn": ""
        },
        "description": {
            "zh_rcn": "1828 （[] n ）, 1829 （[] N ）182A （[] b ）182B （[] p ）182C （[] h ）182D （[] g ）182E （[] m ）182F （[] l ）1830 （[] s ）1831 （[] x ）1832 （[] t ）1833 （[] d ）1834 （[] q ）1835 （[] j ）1836 （[] y ）1837 （[] r ）1838 （[] W ）1839 （[] f ）183A （[] k ）183B （[] K ）183C （[] c ）183D （[] z ）183E （[] H ）183F （[] R ）1840 （[] L ）1841 （[] Z ）1842 （[] C ）",
             "en_rus": "1828 （[] n ）, 1829 （[] N ）182A （[] b ）182B （[] p ）182C （[] h ）182D （[] g ）182E （[] m ）182F （[] l ）1830 （[] s ）1831 （[] x ）1832 （[] t ）1833 （[] d ）1834 （[] q ）1835 （[] j ）1836 （[] y ）1837 （[] r ）1838 （[] W ）1839 （[] f ）183A （[] k ）183B （[] K ）183C （[] c ）183D （[] z ）183E （[] H ）183F （[] R ）1840 （[] L ）1841 （[] Z ）1842 （[] C ）",
            "mn_rcn": "1828 （ n ）, 1829 （ N ）182A （ b ）182B （ p ）182C （ h ）182D （ g ）182E （ m ）182F （l ）1830 （ s ）1831 （ x ）1832 （ t ）1833 （ d ）1834 （ q ）1835 （ j ）1836 （ y ）1837 （ r ）1838 （ W ）1839 （ f ）183A （ k ）183B （ K ）183C （ c ）183D （ z ）183E （ H ）183F （ R ）1840 （ L ）1841 （ Z ）1842 （ C ）"
        }
    },
    "mengguwenyuanyin": {
        "no": 10,
        "name": {
            "zh_rcn": "蒙古文元音",
            "en_rus": "Mgl-Vowel",
            "mn_rcn": ""
        },
        "description": {
            "zh_rcn": "1820 （[] a ）, 1821 （[] e ）, 1822 （[] i ）, 1823 （[] w ）, 1824 （[] v ）, 1825 （[] o ）, 1826 （[] u）, 1827 （[] E ）",
            "en_rus": "1820 （[] a ）, 1821 （[] e ）, 1822 （[] i ）, 1823 （[] w ）, 1824 （[] v ）, 1825 （[] o ）, 1826 （[] u）, 1827 （[] E ）",
            "mn_rcn": "1820 （ a ）, 1821 （ e ）, 1822 （ i ）, 1823 （ w ）, 1824 （ v ）, 1825 （ o ）, 1826 （ u）, 1827 （ E ）"
        }
    },
    "mengguwenyangxingyuanyin": {
        "no": 11,
        "name": {
            "zh_rcn": "蒙古文阳性元音 [ 4 5 ]",
            "en_rus": "Mgl-Positive-Vowel [ 4 5 ]",
            "mn_rcn": "   4 5 "
        },
        "description": {
            "zh_rcn": "1820 （[] a ）, 1823 （[] w ）, 1824 （[] v ）",
            "en_rus": "1820 （[] a ）, 1823 （[] w ）, 1824 （[] v ）",
            "mn_rcn": "1820 （ a ）, 1823 （ w ）, 1824 （ v ）"
        }
    },
    "mengguwenyinxingyuanyin": {
        "no": 12,
        "name": {
            "zh_rcn": "蒙古文阴性元音 [  6 7 ]",
            "en_rus": "Mgl-Negative-Vowel [  6 7 ]",
            "mn_rcn": "    6 7 "
        },
        "description": {
            "zh_rcn": "1821 （[] e ）, 1825 （[] o ）, 1826 （[] u ）, 1827 （[] E ）",
            "en_rus": "1821 （[] e ）, 1825 （[] o ）, 1826 （[] u ）, 1827 （[] E ）",
            "mn_rcn": "1821 （ e ）, 1825 （ o ）, 1826 （ u ）, 1827 （ E ）"
        }
    },
    "mengguweni": {
        "no": 13,
        "name": {
            "zh_rcn": "蒙古文 [] ",
            "en_rus": "Mgl-Vowel [] ",
            "mn_rcn": " "
        },
        "description": {
            "zh_rcn": "1822 （[] I ）",
            "en_rus": "1822 （[] I ）",
            "mn_rcn": "1822 （ I ）"
        }
    },
    "mengguwenouyuanyin": {
        "no": 14,
        "name": {
            "zh_rcn": "蒙古文元音 [6 7]",
            "en_rus": "Mgl-Vowel [6 7]",
            "mn_rcn": "6 7 "
        },
        "description": {
            "zh_rcn": "1825 （[] o ）, 1826 （[] u ）",
            "en_rus": "1825 （[] o ）, 1826 （[] u ）",
            "mn_rcn": "1825 （ o ）, 1826 （ u ）"
        }
    },
    "mengguweneieyuanyin": {
        "no": 15,
        "name": {
            "zh_rcn": "蒙古文元音 [  ]",
            "en_rus": "Mgl-Vowel [  ]",
            "mn_rcn": "   "
        },
        "description": {
            "zh_rcn": "1821 （[] e ）, 1822 （[] i ）, 1827 （[] E ）",
            "en_rus": "1821 （[] e ）, 1822 （[] i ）, 1827 （[] E ）",
            "mn_rcn": "1821 （ e ）, 1822 （ i ）, 1827 （ E ）"
        }
    },
    "mengguwenaewveyuanyin": {
        "no": 16,
        "name": {
            "zh_rcn": "蒙古文元音 [  4 5 ]",
            "en_rus": "Mgl-Vowel [  4 5 ]",
            "mn_rcn": "  4 5 "
        },
        "description": {
            "zh_rcn": "1820 （[] a ）, 1821 （[] e ）, 1823 （[] w ）, 1824 （[] v ）, 1827 （[] E ）",
            "en_rus": "1820 （[] a ）, 1821 （[] e ）, 1823 （[] w ）, 1824 （[] v ）, 1827 （[] E ）",
            "mn_rcn": "1820 （ a ）, 1821 （ e ）, 1823 （ w ）, 1824 （ v ）, 1827 （ E ）"
        }
    },
    "mengguwenaiewveyuanyin": {
        "no": 17,
        "name": {
            "zh_rcn": "蒙古文元音 [   4 5 ]",
            "en_rus": "Mgl-Vowel [   4 5 ]",
            "mn_rcn": "   4 5  "
        },
        "description": {
            "zh_rcn": "1820 （[] a ）, 1821 （[] e ）, 1822 （[] i ）, 1823 （[] w ）, 1824 （[] v ）, 1827 （[] E ）",
            "en_rus": "1820 （[] a ）, 1821 （[] e ）, 1822 （[] i ）, 1823 （[] w ）, 1824 （[] v ）, 1827 （[] E ）",
            "mn_rcn": "1820 （ a ）, 1821 （ e ）, 1822 （ i ）, 1823 （ w ）, 1824 （ v ）, 1827 （ E ）"
        }
    },
    "kongzhifu202f": {
        "no": 18,
        "name": {
            "zh_rcn": "MSC",
            "en_rus": "MSC",
            "mn_rcn": "MSC"
        },
        "description": {
            "zh_rcn": "Mongolian Suffix Connector（202F or 180F）",
            "en_rus": "Mongolian Suffix Connector（202F or 180F）",
            "mn_rcn": "Mongolian Suffix Connector（202F or 180F）"
        }
    },
    "kongzhifuzwj": {
        "no": 19,
        "name": {
            "zh_rcn": "ZWJ",
            "en_rus": "ZWJ",
            "mn_rcn": "ZWJ"
        },
        "description": {
            "zh_rcn": "零宽连接符",
            "en_rus": "零宽连接符",
            "mn_rcn": "零宽连接符"
        }
    },
    "kongzhifumvs": {
        "no": 20,
        "name": {
            "zh_rcn": "MVS",
            "en_rus": "MVS",
            "mn_rcn": "MVS"
        },
        "description": {
            "zh_rcn": "元音分隔符",
            "en_rus": "元音分隔符",
            "mn_rcn": "元音分隔符"
        }
    },
    "yuanyina": {
        "no": 21,
        "name": {
            "zh_rcn": "蒙古文元音 []",
            "en_rus": "Mgl-Vowel []",
            "mn_rcn": " "
        },
        "description": {
            "zh_rcn": "1820 （[] a ）",
            "en_rus": "1820 （[] a ）",
            "mn_rcn": "1820 （ a ）"
        }
    },
    "yuanyine": {
        "no": 22,
        "name": {
            "zh_rcn": "蒙古文元音 []",
            "en_rus": "Mgl-Vowel[ ]",
            "mn_rcn": " "
        },
        "description": {
            "zh_rcn": "1821 （[] e ）",
            "en_rus": "1821 （[] e ）",
            "mn_rcn": "1821 （ e ）"
        }
    },
    "cifenjiefu": {
        "no": 23,
        "name": {
            "zh_rcn": "词分界符",
            "en_rus": "Word_bound",
            "mn_rcn": "    "
        },
        "description": {
            "zh_rcn": "在双词根词中标记两个词根的边界",
            "en_rus": "Double-rooted word bound",
            "mn_rcn": "      "
        }
    },
    "mengguwennirogo": {
        "no": 24,
        "name": {
            "zh_rcn": "180A",
            "en_rus": "180A",
            "mn_rcn": "180A"
        },
        "description": {
            "zh_rcn": "腰",
            "en_rus": "NIRUGU",
            "mn_rcn": ""
        }
    },
    "kongzhifufvs1": {
        "no": 25,
        "name": {
            "zh_rcn": "FVS1",
            "en_rus": "FVS1",
            "mn_rcn": "FVS1"
        },
        "description": {
            "zh_rcn": "变形选择控制符1，编码是180B",
            "en_rus": "Free Variant Selector 1 , code is 180B。",
            "mn_rcn": "     1"
        }
    },
    "kongzhifufvs2": {
        "no": 26,
        "name": {
            "zh_rcn": "FVS2",
            "en_rus": "FVS2",
            "mn_rcn": "FVS2"
        },
        "description": {
            "zh_rcn": "变形选择控制符2，编码是180C",
            "en_rus": "Free Variant Selector 2 , code is 180C。",
            "mn_rcn": "     2"
        }
    },
    "kongzhifufvs3": {
        "no": 27,
        "name": {
            "zh_rcn": "FVS3",
            "en_rus": "FVS3",
            "mn_rcn": "FVS3"
        },
        "description": {
            "zh_rcn": "变形选择控制符3，编码是180D",
            "en_rus": "Free Variant Selector 3 , code is 180D。",
            "mn_rcn": "     3"
        }
    },
    "kongzhifufvs4": {
        "no": 28,
        "name": {
            "zh_rcn": "FVS4",
            "en_rus": "FVS4",
            "mn_rcn": "FVS4"
        },
        "description": {
            "zh_rcn": "变形选择控制符4，编码也许是181A",
            "en_rus": "Free Variant Selector 4 , code maybe 181A。",
            "mn_rcn": "     4（code=181A）"
        }
    },
    "buzuchengyinjie": {
        "no": 29,
        "name": {
            "zh_rcn": "不组成音节",
            "en_rus": "can't compose syllable",
            "mn_rcn": "  "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "zuchengyinjie": {
        "no": 30,
        "name": {
            "zh_rcn": "至少组成一个音节",
            "en_rus": "compose at least one syllable",
            "mn_rcn": " "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "yangxingci": {
        "no": 31,
        "name": {
            "zh_rcn": "阳性词",
            "en_rus": "masculine word",
            "mn_rcn": "  "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "yinxingci": {
        "no": 32,
        "name": {
            "zh_rcn": "阴性词",
            "en_rus": "feminine word",
            "mn_rcn": "  "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "feiiyuanyin": {
        "no": 33,
        "name": {
            "zh_rcn": " 蒙古文元音[    4 5 6 7   ]",
            "en_rus": "Mgl-Vowel[   4 5 6 7   ]",
            "mn_rcn": "  4 5 6 7    "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    } ,
    "fujiazifu": {
        "no": 34,
        "name": {
            "zh_rcn": " 附加字符 ",
            "en_rus": " suffix",
            "mn_rcn": "   "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "bubaohan": {
        "no": 35,
        "name": {
            "zh_rcn": " 不包含： ",
            "en_rus": " exclude : ",
            "mn_rcn": "  ： "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "mengguwensdfuyin": {
        "no": 36,
        "name": {
            "zh_rcn": "蒙古文[   ]辅音",
            "en_rus": "Mgl-Consonant-[   ]",
            "mn_rcn": "    "
        },
        "description": {
            "zh_rcn": "",
            "en_rus": "",
            "mn_rcn": ""
        }
    },
    "kaolvshifoufeiyuantoufuyin_bpfkK": {
        "no": 37,
        "name": {
            "zh_rcn": "区别考虑是否圆头辅音[      ]",
            "en_rus": "Consider that the consonant is circle head or not [      ]",
            "mn_rcn": "               "
        },
        "description": {
            "zh_rcn": "是否是182A （[] b ）, 182B （[] p ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "en_rus": "circle head consonant or not （182A （[] b ）, 182B （[] p ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "mn_rcn": "182A （ b ）, 182B （ p ）, 1839 （ f ）, 183A （ k ）, 183B （ K ）    "
        }
    },
    "kaolvshifoufeiyuantoufuyin_bphgfkK": {
        "no": 38,
        "name": {
            "zh_rcn": "区别考虑是否圆头辅音[        ]",
            "en_rus": "Consider that the consonant is circle head or not [        ]",
            "mn_rcn": "                "
        },
        "description": {
            "zh_rcn": "是否是182A （[] b ）, 182B （[] p ）, 182C （[] h ）, 182D （[] g ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "en_rus": "circle head consonant or not 182A （[] b ）, 182B （[] p ）, 182C （[] h ）, 182D （[] g ）, 1839 （[] f ）, 183A （[] k ）, 183B （[] K ）",
            "mn_rcn": "182A （ b ）, 182B （ p ）, 182C （ h ）, 182D （ g ）, 1839 （ f ）, 183A （ k ）, 183B （ K ）   "
        }
    },
    "kaolvshifouyuanyin": {
        "no": 39,
        "name": {
            "zh_rcn": "考虑后面是否元音[        ]",
            "en_rus": "Consider that the behind character is or not vowel [         ]",
            "mn_rcn": "                     "
        },
        "description": {
            "zh_rcn": "是否是1820 （[ ] a ）, 1821 （[  ] e ）,1822 （[ ] i ）, 1823 （[ ] w ）, 1824 （[ ] v ）, 1825 （[ ] o ）, 1826 （[  ] u ）, 1827 （[ ] E ）",
            "en_rus": "it is or not vowel 1820 （[ ] a ）, 1821 （[  ] e ）,1822 （[ ] i ）, 1823 （[ ] w ）, 1824 （[ ] v ）, 1825 （[ ] o ）, 1826 （[  ] u ）, 1827 （[ ] E ）",
            "mn_rcn": "1820 （[ ] a ）, 1821 （[  ] e ）,1822 （[ ] i ）, 1823 （[ ] w ）, 1824 （[ ] v ）, 1825 （[ ] o ）, 1826 （[  ] u ）, 1827 （[ ] E ）   "
        }
    },
    "kaolvshifouyuanyin_eiouE": {
        "no": 40,
        "name": {
            "zh_rcn": "考虑后面是否元音[       ]",
            "en_rus": "Consider that the behind character is or not vowel [        ]",
            "mn_rcn": "               "
        },
        "description": {
            "zh_rcn": "是否是1821 （[  ] e ）, 1822 （[ ] i ）, 1825 （[ ] o ）, 1826 （[  ] u ）, 1827 （[ ] E ）",
            "en_rus": "it is or not vowel 1821 （[  ] e ）, 1822 （[ ] i ）, 1825 （[ ] o ）, 1826 （[  ] u ）, 1827 （[ ] E ）",
            "mn_rcn": "1821 （[  ] e ）, 1822 （[ ] i ）, 1825 （[ ] o ）, 1826 （[  ] u ）, 1827 （[ ] E ）   "
        }
    },
    "mengguwenuyuanyin": {
        "no": 41,
        "name": {
            "zh_rcn": "蒙古文元音 [ 7]",
            "en_rus": "Mgl-Vowel [ 7]",
            "mn_rcn": " 7 "
        },
        "description": {
            "zh_rcn": "1826 （[] u ）",
            "en_rus": "1826 （[] u ）",
            "mn_rcn": "1826 （ u ）"
        }
    },
    "feiyuanyina": {
        "no": 42,
        "name": {
            "zh_rcn": "非蒙古文元音 []",
            "en_rus": "Not Mgl-Vowel []",
            "mn_rcn": "    "
        },
        "description": {
            "zh_rcn": "1820 （[] a ）",
            "en_rus": "1820 （[] a ）",
            "mn_rcn": "1820 （ a ）"
        }
    },
    "feiyuanyine": {
        "no": 43,
        "name": {
            "zh_rcn": "非蒙古文元音 []",
            "en_rus": "Not Mgl-Vowel[ ]",
            "mn_rcn": "    "
        },
        "description": {
            "zh_rcn": "1821 （[] e ）",
            "en_rus": "1821 （[] e ）",
            "mn_rcn": "1821 （ e ）"
        }
    }
});

//获取相应语言的字符串资源   
function getkeywordstext(lang, kwid) {
    if (typeof (XRULEKEYWORDS[kwid]) == 'undefined') { return 'unknown'; };
    if (typeof (XRULEKEYWORDS[kwid]['name']) == 'undefined') { return 'unknown'; };
    if (typeof (XRULEKEYWORDS[kwid]['name'][lang]) == 'undefined') { return 'unknown'; };
    return XRULEKEYWORDS[kwid]['name'][lang];
};