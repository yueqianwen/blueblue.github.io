//定义变量
if(typeof(all_char_list)==="undefined"){ var all_char_list = {}; };
//初始化数据
all_char_list = {
    "version": "1.0.2",
    "editstate": "0",
    "lastupdate": "2018.06.20.02",
    "charlist": [
      {
          "charvalue": "",
          "charindex": "01",
          "unicode": "1820",
          "latincode": "a",
          "latinname": "A",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MAD10",
                "ruleisolate": " (1820) ［+ #kongzhifufvs3#］ ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MAD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",                       
                       "rulevalue": " (1820)",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   },
                   {
                       "ruleno": "②",
                       "ruleindex": "MAD12",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1820) + #kongzhifufvs3#",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MAD20",
                "ruleisolate": " (1820) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MAD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",                       
                       "rulevalue": " (1820) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "助词",
                       "description_en_rus": "Particles",
                       "rulesample": " ()     ()        () "
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "3",
                "ruleindex": "MAD30",
                "ruleisolate": "  (1820) + #kongzhifufvs2#    ",
                "rules": [
                    {
                        "ruleno": "①",
                        "ruleindex": "MAD31",
                        "isexcluderule": "0",
                        "ismscmodel": "1",
                        "rulevalue": " #kongzhifu202f#  + (1820)",
                        "description_mn_rcn": "      （  ）",
                        "description_zh_rcn": "单词后面以格附加成分形式出现",
                        "description_en_rus": "Appear behind the word as a case suffix（Dative）",
                        "rulesample": "()              ()"
                    },
                   {
                       "ruleno": "②",
                       "ruleindex": "MAD32",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1820) + #kongzhifufvs2# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立形",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MAS10",
                "ruleisolate": " (1820) ［+#kongzhifufvs2#］+ #kongzhifuzwj#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MAS11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",                       
                       "rulevalue": " (1820) + #mengguwenzifuchuan#",
                       "description_mn_rcn": "     ",
                       "description_zh_rcn": "词首形式",
                       "description_en_rus": "Initial Form",
                       "rulesample": "()    ()    ()"
                   },
                   {
                       "ruleno": "②",
                       "ruleindex": "MAS12",
                       "isexcluderule": "1",
                       "ismscmodel": "0",                       
                       "rulevalue": " (1820) +  #kongzhifufvs2# + #mengguwenzifuchuan#",
                       "description_mn_rcn": "     ",
                       "description_zh_rcn": "词首形式",
                       "description_en_rus": "Initial Form",
                       "rulesample": " ()（()）    ()（()）     () （()）     ()（()）  "
                   }
                ]
            },
        {
            "bianxingvalue": "",
            "bianxingno": "2",
            "ruleindex": "MAS20",
            "ruleisolate": " (1820) + #kongzhifufvs1# + #kongzhifuzwj#",
            "rules": [
               {
                   "ruleno": "①",
                   "ruleindex": "MAS21",
                   "isexcluderule": "0",
                   "ismscmodel": "1",                   
                   "rulevalue": "#kongzhifu202f#  + (1820) + 1834 + 1820 + #feimengguwenzifu#",
                   "description_mn_rcn": "         ",
                   "description_zh_rcn": "词后面，在格附加成分的首出现",
                   "description_en_rus": "appears as a case suffix behind the word",
                   "rulesample": " ()       ()        ()       () "
               },
               {
                   "ruleno": "②",
                   "ruleindex": "MAS22",
                   "isexcluderule": "0",
                   "ismscmodel": "1",                   
                   "rulevalue": "#kongzhifu202f#  + (1820) + 1834 + 1820 +182D + 1820 + 1828  + #feimengguwenzifu#",
                   "description_mn_rcn": "         ",
                   "description_zh_rcn": "词后面，在格附加成分的首出现",
                   "description_en_rus": "appears as a case suffix behind the word",
                   "rulesample": " ()       ()         ()        ()  "
               },
               {
                   "ruleno": "③",
                   "ruleindex": "MAS23",
                   "isexcluderule": "1",
                   "ismscmodel": "0",                   
                   "rulevalue": " (1820) +  #kongzhifufvs1# + #mengguwenzifuchuan#",
                   "description_mn_rcn": "     ",
                   "description_zh_rcn": "词首形式",
                   "description_en_rus": "Initial Form",
                   "rulesample": "()（()）     ()（()）    ()（()）     ()（()）"
               }
            ]
        }
          ],
          "medial": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MAZ10",
                "ruleisolate": "#kongzhifuzwj# + (1820) +  #kongzhifuzwj#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MAZ11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",                       
                       "rulevalue": "#mengguwenzifuchuan# / #kongzhifuzwj# + (1820) +  #mengguwenzifuchuan# / #kongzhifuzwj# ",
                       "description_mn_rcn": "      ",
                       "description_zh_rcn": "词中形式",
                       "description_en_rus": "Medial form ",
                       "rulesample": "()()      ()()    ()       ()    ()     ()      () "
                   }
                ]
            },
        {
            "bianxingvalue": "",
            "bianxingno": "2",
            "ruleindex": "MAZ20",
            "ruleisolate": "#kongzhifuzwj# + (1820) + #kongzhifufvs1# +  #kongzhifuzwj#",
            "rules": [
               {
                   "ruleno": "①",
                   "ruleindex": "MAZ21",
                   "isexcluderule": "1",
                   "ismscmodel": "0",                   
                   "rulevalue": "#mengguwenzifuchuan# / #kongzhifuzwj#+ (1820) + #kongzhifufvs1# +  #mengguwenzifuchuan# / #kongzhifuzwj#",
                   "description_mn_rcn": "                  （   ）",
                   "description_zh_rcn": "双词根词的第二个词的词首出现 或 词中形式（两个牙）",
                   "description_en_rus": "appears in the second word of the Double-rooted word or Medial form （with two short tooth）",
                   "rulesample": "()    ()     ()()（()()）      ()()（()()）    ()（()）       ()（()）    ()（()）     ()（()）      ()（()）"
               }
            ]
        }
          ],
          "final": [ 
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MAM10",
                "ruleisolate": "#kongzhifuzwj# + (1820)  ［+#kongzhifufvs2#］",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MAM11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",                       
                       "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu# + #feiyuantoufuyin_bpfkK# / #mengguwenyuanyin# + (1820) ",
                       "description_mn_rcn": "           /      ",
                       "description_zh_rcn": "[      ] 以外辅音或元音后面向后连写右撇",
                       "description_en_rus": "right tail- orkitz- that appears behind consonants excluding [      ] or vewel",
                       "rulesample": "()     ()   ()       ()        ()     ()    ()   "
                   },
                   {
                       "ruleno": "②",
                       "ruleindex": "MAM12",
                       "isexcluderule": "1",
                       "ismscmodel": "0",                       
                       "rulevalue": "#mengguwenzifuchuan# +   (1820) +  #kongzhifufvs2# ",
                       "description_mn_rcn": "            ",
                       "description_zh_rcn": "[      ] 辅音后面向后连写右撇",
                       "description_en_rus": "right tail- orkitz- that appears behind consonants [      ]",
                       "rulesample": "()（()）       ()（()）       ()（()）      ()（()）     ()（()）      ()（()） "
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MAM20",
                "ruleisolate": "#kongzhifuzwj# + (1820) + #kongzhifufvs1#",
                "rules": [
                    {
                        "ruleno": "①",
                        "ruleindex": "MAM21",
                       "isexcluderule": "0",
                        "ismscmodel": "0",                       
                        "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu# + #yuantoufuyin_bpfkK#  + (1820) ",
                        "description_mn_rcn": "            ",
                        "description_zh_rcn": "[      ] 辅音后面向前连写左撇",
                        "description_en_rus": "connected left tail- uragshilag- appears behind consonants [      ]",
                        "rulesample": "()       ()       ()      ()     ()      () "
                    },
                    {
                        "ruleno": "②",
                        "ruleindex": "MAM22",
                        "isexcluderule": "1",
                        "ismscmodel": "0",                        
                        "rulevalue": "#mengguwenzifuchuan# + (1820) + #kongzhifufvs1# ",
                        "description_mn_rcn": "          /      ",
                        "description_zh_rcn": "[      ] 以外的辅音或元音后面向前连写左撇",
                        "description_en_rus": "connected left tail- uragshilag - that appears behind consonants excluding  [      ] or vowel",
                        "rulesample": "  () （ () ）     ()  （ () ）     ()      ()   ()    () "
                    }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "3",
                "ruleindex": "MAM30",
                "ruleisolate": " #kongzhifumvs# + (1820)   ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MAM31",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": "#mengguwenzifuchuan# + #kongzhifumvs# + (1820) ",
                       "description_mn_rcn": "                  ",
                       "description_zh_rcn": "[            ] 辅音后面向前分写左撇",
                       "description_en_rus": "Write as separated left tail- Tsatslag behind consonants  [           ]",
                       "rulesample": "()     ()       ()    ()              ()"
                   }
                ]
            }
          ]
      },
      {
          "charvalue": "",
          "charindex": "02",
          "unicode": "1821  ",
          "latincode": "e",
          "latinname": "E",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MED10",
                "ruleisolate": " (1821) ［+ #kongzhifufvs2#］ ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MED11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",                       
                       "rulevalue": " (1821) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()     ()        () "
                   },
                   {
                       "ruleno": "②",
                       "ruleindex": "MED12",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1821)  + #kongzhifufvs2#",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()     ()        () "
                   }
                ]
            },
      {
          "bianxingvalue": "",
          "bianxingno": "2",
          "ruleindex": "MED20",
          "ruleisolate": " (1821) +  #kongzhifufvs1#  ",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MED21",
                 "isexcluderule": "0",
                 "ismscmodel": "1",
                 "rulevalue": "#kongzhifu202f#  + (1821)  ",
                 "description_mn_rcn": "      ",
                 "description_zh_rcn": "单词后面以格附加成分形式出现",
                 "description_en_rus": "It appears behind the word as a case suffix（Dative）",
                 "rulesample": "()    "
                  
             },
          {
                 "ruleno": "②",
                 "ruleindex": "MED22",
                 "isexcluderule": "1",
                 "ismscmodel": "0",
                 "rulevalue": " (1821) +  #kongzhifufvs1# ",
                 "description_mn_rcn": " ",
                 "description_zh_rcn": "独立形",
                 "description_en_rus": "Isolate Form",
                 "rulesample": "()"
      }
          ]
      }
          ],
          "initial": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MES10",
                "ruleisolate": " (1821) +  #kongzhifuzwj# ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MES11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",                     
                       "rulevalue": " (1821) +  #mengguwenzifuchuan#",
                       "description_mn_rcn": "     ",
                       "description_zh_rcn": "词首形式",
                       "description_en_rus": "Initial Form",
                       "rulesample": "()     ()      ()       ()      ()     ()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MES20",
                "ruleisolate": " (1821) +  #kongzhifufvs1# + #kongzhifuzwj# ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MES21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",                       
                       "rulevalue": " (1821) + (#kongzhifufvs1#) + #mengguwenzifuchuan#",
                       "description_mn_rcn": "      （   ）",
                       "description_zh_rcn": "词首形式（两个牙）",
                       "description_en_rus": "Initial Form （with two short tooth）",
                       "rulesample": "() （() ）      ()（ ()）   "
                   }
                ]
            }
          ],
          "medial": [
      {
          "bianxingvalue": "",
          "bianxingno": "1",
          "ruleindex": "MEZ10",
          "ruleisolate": "#kongzhifuzwj# + (1821) +  #kongzhifuzwj#",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MEZ11",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# / #kongzhifuzwj# +  (1821) +  #mengguwenzifuchuan# / #kongzhifuzwj#",
                 "description_mn_rcn": "         ",
                 "description_zh_rcn": "词中形式",
                 "description_en_rus": "Medial form ",
                 "rulesample": "()()      ()       ()      ()()    ()()()      ()()    ()"
             }
          ]
      }
          ],
          "final": [ 
      {
          "bianxingvalue": "",
          "bianxingno": "1",
          "ruleindex": "MEM10",
          "ruleisolate": "#kongzhifuzwj# + (1821)  ［+#kongzhifufvs2#］",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MEM11",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu# + #feiyuantoufuyin_bphgfkK#  / #mengguwenyuanyin#+ (1821)",
                 "description_mn_rcn": "            /        ",
                 "description_zh_rcn": "[        ]以外辅音或元音后面向后连写右撇",
                 "description_en_rus": "Right tail- orkitz- appears behind consonants excluding  [        ] or vewel",
                 "rulesample": "()     ()         ()    ()  "
             },
             {
                 "ruleno": "②",
                 "ruleindex": "MEM12",
                 "isexcluderule": "1",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# + (1821) + #kongzhifufvs2# ",
                 "description_mn_rcn": "               ",
                 "description_zh_rcn": "[        ] 辅音后面向后连写右撇",
                 "description_en_rus": "connected right tail- uragshilag- appears behind consonants [        ]",
                 "rulesample": "()（()）    ()（()）      ()（()）       ()（()）        ()（()）     ()（()）    "
             }
          ]
      },
      {
          "bianxingvalue": "",
          "bianxingno": "2",
          "ruleindex": "MEM20",
          "ruleisolate": "#kongzhifuzwj# + (1821) + #kongzhifufvs1#",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MEM21",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu# + #yuantoufuyin_bphgfkK#  + (1821) ",
                 "description_mn_rcn": "               ",
                 "description_zh_rcn": "[        ] 辅音后面向前连写左撇",
                 "description_en_rus": "connected left tail- uragshilag- appears behind consonants [        ]",
                 "rulesample": "()    ()      ()       ()        ()     ()    "
             },
              {
                  "ruleno": "②",
                  "ruleindex": "MEM22",
                  "isexcluderule": "1",
                  "ismscmodel": "0",
                  "rulevalue": "#mengguwenzifuchuan#  + (1821) + #kongzhifufvs1# ",
                  "description_mn_rcn": "            /        ",
                  "description_zh_rcn": "[        ] 以外辅音或元音后面向前连写左撇",
                  "description_en_rus": "connected left tail- uragshilag - appears behind consonants excluding  [        ] or vowel",
                  "rulesample": "()  （ () ）    () （ ()）        ()    ()  "
              }
          ]
      },
      {
          "bianxingvalue": "",
          "bianxingno": "3",
          "ruleindex": "MEM30",
          "ruleisolate": " #kongzhifumvs# + (1821)    ",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MEM31",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# + #kongzhifumvs# + (1821) ",
                 "description_mn_rcn": "                ",
                 "description_zh_rcn": "[          ] 辅音后面向前分写左撇",
                 "description_en_rus": "It writes as separate left tail- Tsatslag behind consonants [          ]",
                 "rulesample": "()     ()     ()      ()       ()    ()    "
             }
          ]
      }
          ]
      },
      {
          "charvalue": "",
          "charindex": "03",
          "unicode": "1822",
          "latincode": "i",
          "latinname": "I",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MID10",
                "ruleisolate": " (1822)  ［+#kongzhifufvs3#］ ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MID11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1822) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   },
                     {
                         "ruleno": "②",
                         "ruleindex": "MID12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1822) + #kongzhifufvs3#  ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind a word in final form as a case suffix",
                         "rulesample": " ()       ()         ()"
                     }
                ]
            },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MID20",
                  "ruleisolate": " (1822) +#kongzhifufvs1# ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MID21",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1822) ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind a word in final form as a case suffix",
                         "rulesample": " ()    ()"
                     },
                   {
                       "ruleno": "②",
                       "ruleindex": "MID22",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1822) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MID30",
                  "ruleisolate": " (1822) +#kongzhifufvs2# ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MID31",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1822) + #kongzhifufvs2#  ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind a word in final form as a case suffix",
                         "rulesample": "()     ()    ()"
                     }
                  ]
              }
          ],
          "initial": [
      {
          "bianxingvalue": "",
          "bianxingno": "1",
          "ruleindex": "MIS10",
          "ruleisolate": " (1822) +　［#kongzhifufvs2#］ + #kongzhifuzwj#",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MIS11",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": " (1822) +  #mengguwenzifuchuan#",
                 "description_mn_rcn": "     ",
                 "description_zh_rcn": "词首形式",
                 "description_en_rus": "Initial Form",
                 "rulesample": "()     ()      ()    ()    ()"
             },
             {
                 "ruleno": "②",
                 "ruleindex": "MIS12",
                 "isexcluderule": "1",
                 "ismscmodel": "0",
                 "rulevalue": " (1822) +  (#kongzhifufvs2#) +  #mengguwenzifuchuan#",
                 "description_mn_rcn": "     ",
                 "description_zh_rcn": "词首形式",
                 "description_en_rus": "Initial Form",
                 "rulesample": " ()       ()"
             }
          ]
      },
      {
          "bianxingvalue": "",
          "bianxingno": "2",
          "ruleindex": "MIS20",
          "ruleisolate": " (1822) + #kongzhifufvs1# + #kongzhifuzwj#",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MIS21",
                 "isexcluderule": "0",
                 "ismscmodel": "1",
                 "rulevalue": "#kongzhifu202f#  + (1822) + 1836 + 1820 / 1821 + 1837+  #feimengguwenzifu#",
                 "description_mn_rcn": "         ",
                 "description_zh_rcn": "词后面，在格附加成分的首出现",
                 "description_en_rus": "It appears as a case suffix behind the word",
                 "rulesample": " ()           ()     "
             },
             {
                 "ruleno": "②",
                 "ruleindex": "MIS22",
                 "isexcluderule": "0",
                 "ismscmodel": "1",
                 "rulevalue": "#kongzhifu202f#  + (1822) + 1836 + 1820  / 1821 + 1828 +  #feimengguwenzifu#",
                 "description_mn_rcn": "         ",
                 "description_zh_rcn": "词后面，在格附加成分的首出现",
                 "description_en_rus": "It appears as a case suffix behind the word",
                 "rulesample": " ()       ()"
             },
             {
                 "ruleno": "③",
                 "ruleindex": "MIS23",
                 "isexcluderule": "1",
                 "rulevalue": " (1822) +  #kongzhifufvs1# + #mengguwenzifuchuan#",
                 "description_mn_rcn": "     ",
                 "description_zh_rcn": "词首形式",
                 "description_en_rus": "Initial Form",
                 "rulesample": "()        ()       ()     ()      ()    ()    ()        "
             }
          ]
      }
          ],
          "medial": [
       {
           "bianxingvalue": "",
           "bianxingno": "1",
           "ruleindex": "MIZ10",
           "ruleisolate": "#kongzhifuzwj# + (1822)  ［+ #kongzhifufvs3#］　+  #kongzhifuzwj#",
           "rules": [
              {
                  "ruleno": "①",
                  "ruleindex": "MIZ11",
                  "isexcluderule": "0",
                  "ismscmodel": "0",
                  "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# + #mengguwenfuyin# + (1822) +  #mengguwenzifuchuan# /  #kongzhifuzwj#",
                  "description_mn_rcn": "    #mengguwenfuyin#    ",
                  "description_zh_rcn": "在词中，#mengguwenfuyin#后面出现形式",
                  "description_en_rus": "It appears behind #mengguwenfuyin#  in  the medial of word",
                  "rulesample": "()      ()    ()      ()       () "
              },
             {
                 "ruleno": "②",
                 "ruleindex": "MIZ12",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan#（#buzuchengyinjie#）/ #feimengguwenzifu#  /  #kongzhifuzwj# +  #mengguwenouyuanyin#  + (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "        6 7     #fujiazifu#   （      ）",
                 "description_zh_rcn": "在第一音节里， [6 7 ] 元音后以#fujiazifu#形式出现",
                 "description_en_rus": "In the first syllable, behind the vowel  [6  7 ] , it appears as #fujiazifu#.",
                 "rulesample": "()        ()     ()"
             },
             {
                 "ruleno": "③",
                 "ruleindex": "MIZ13",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# + #mengguweni#   + (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "     #fujiazifu# ",
                 "description_zh_rcn": "在词中，元音 [] 后以#fujiazifu#形式出现",
                 "description_en_rus": "It appears behind vowel  []  in medial of word as #fujiazifu#",
                 "rulesample": "()        ()     ()        ()"               
             },
             {
                 "ruleno": "④",
                 "ruleindex": "MIZ14",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan#（#zuchengyinjie#） +  #mengguwenouyuanyin#  + #kongzhifufvs1# / #kongzhifufvs2# + (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "           6  7     #fujiazifu#  ",
                 "description_zh_rcn": "在第二音节及以后的音节里，[6  7 ] 元音（有长牙）后以#fujiazifu#形式出现",
                 "description_en_rus": "It appears behind vowels  [6  7 ] with long tooth – silib – which is behind the first syllabel as #fujiazifu#",
                 "rulesample": "  ()   () "
             },
             {
                 "ruleno": "⑤",
                 "ruleindex": "MIZ15",
                 "isexcluderule": "1",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj#  + (1822) + #kongzhifufvs3# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "    #fujiazifu#   （       ）",
                 "description_zh_rcn": "在词中，元音后以#fujiazifu#形式出现 （只有一个长牙 ）",
                 "description_en_rus": "It appears behind vowel  in medial of word as a #fujiazifu#（with only silib）",
                 "rulesample": "  ()      ()       ()      ()（()）     ()（()）      ()（()）     ()（()）   ()    ()  （()）        ()  （ ()）       ()  （ () ）     ()  （ ()）"
             }
           ]
       },
      {
          "bianxingvalue": "",
          "bianxingno": "2",
          "ruleindex": "MIZ20",
          "ruleisolate": "#kongzhifuzwj# + (1822) + #kongzhifufvs1# +  #kongzhifuzwj#",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MIZ21",
                 "isexcluderule": "1",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1822) + #kongzhifufvs1# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "        ",
                 "description_zh_rcn": "在词中，辅音后面出现形式",
                 "description_en_rus": "It appears behind consonant  in  the medial of word",
                 "rulesample": " ()（()）     () （() ）     () （() ）   () （()）      () （()）       () （()）    () （()）     () （()）      () （()）     () （() ）"
             }
          ]
      },
      {
          "bianxingvalue": "",
          "bianxingno": "3",
          "ruleindex": "MIZ30",
          "ruleisolate": "#kongzhifuzwj# + (1822) + #kongzhifufvs2# +  #kongzhifuzwj#",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MIZ31",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# + #mengguwenaewveyuanyin#  + (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "  4 5      #fujiazifu#  ",
                 "description_zh_rcn": "在词中，元音 [  4 5 ] 后以词中#fujiazifu#形式出现",
                 "description_en_rus": "It appears behind vowel  [   4 5  ] in medial of word as a #fujiazifu#",
                 "rulesample": "()     ()    ()   ()     ()     () （        ）  ()    ()（ ()）      ()（()）       ()（()）"
             },
             {
                 "ruleno": "②",
                 "ruleindex": "MIZ32",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan#（#zuchengyinjie#） +  #mengguwenouyuanyin#  + (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "          6  7     #fujiazifu#  ",
                 "description_zh_rcn": "在第二音节及以后的音节里， [ 6  7 ] 元音后以#fujiazifu#形式出现",
                 "description_en_rus": "It appears behind vowels  [ 6  7 ] with long tooth – silib – which is behind the first syllabel as a #fujiazifu#",
                 "rulesample": "()          ()       ()     ()"
             },
            {
                "ruleno": "③",
                "ruleindex": "MIZ33",
                "isexcluderule": "0",
                "ismscmodel": "0",
                "rulevalue": "#mengguwenzifuchuan#（#buzuchengyinjie#） +  #mengguwenouyuanyin#  + #kongzhifufvs3# + (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                "description_mn_rcn": "        6 7     #fujiazifu#   （      ）",
                "description_zh_rcn": "在第一音节里， [6 7 ] 元音后以#fujiazifu#形式出现",
                "description_en_rus": "In the first syllable, behind the vowel  [6  7 ] , it appears as #fujiazifu#.",
                "rulesample": "() （() ）"
            },
            {
                "ruleno": "④",
                "ruleindex": "MIZ34",
                "isexcluderule": "0",
                "ismscmodel": "0",
                "rulevalue": "#feimengguwenzifu#  /  #kongzhifuzwj#  + #mengguwenouyuanyin#  + #kongzhifufvs1#+ (1822) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                "description_mn_rcn": "         6 7     #fujiazifu#   （      ）",
                "description_zh_rcn": "在第一音节里， [ 6 7 ] 元音后以#fujiazifu#形式出现",
                "description_en_rus": "In the first syllable, behind the vowel  [ 6 7 ] , it appears as #fujiazifu#.",
                "rulesample": " () （()） "
            },
             {
                 "ruleno": "⑤",
                 "ruleindex": "MIZ35",
                 "isexcluderule": "1",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1822) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                 "description_mn_rcn": "     （   ）",
                 "description_zh_rcn": "在词中出现形式",
                 "description_en_rus": "It appears  in  the medial of word",
                 "rulesample": "()  （()）      () （()）   () （()）      () （() ）       () （()）  () （() ）     () （()）   () （()）"
             }
          ]
      }
          ],
          "final": [ 
      {
          "bianxingvalue": "",
          "bianxingno": "1",
          "ruleindex": "MIM10",
          "ruleisolate": "#kongzhifuzwj# + (1822) ",
          "rules": [
             {
                 "ruleno": "①",
                 "ruleindex": "MIM11",
                 "isexcluderule": "0",
                 "ismscmodel": "0",
                 "rulevalue": "#mengguwenzifuchuan# + (1822)  ",
                 "description_mn_rcn": "     ",
                 "description_zh_rcn": "词末形式",
                 "description_en_rus": "Final Form",
                 "rulesample": "()       ()      ()    ()      ()       ()     ()      ()      ()"
             }
          ]
      }
          ]
      },
      {
          "charvalue": "",
          "charindex": "04",
          "unicode": "1823",
          "latincode": "w",
          "latinname": "O",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MWD10",
                "ruleisolate": " (1823) ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MWD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1823) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MWS10",
                  "ruleisolate": " (1823) + #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MWS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1823) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()      ()      ()      ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MWZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1823) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MWZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1823) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial form",
                         "rulesample": "()    ()         ()       ()    ()            ()   ()      ()        ()       ()   () （()）      () （()）   () （()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MWZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1823) +  #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MWZ21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1823) + #kongzhifufvs1# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "双词根词的第二个词的词首出现",
                         "description_en_rus": "It appears in the second word of the compound word",
                         "rulesample": "()      ()    ()    () （()）   ()  （() ）       () （ ()）      () （()）   () （()）     () （() ）   () （()）     () （()）       () （()）       () （()）     "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MWM10",
                  "ruleisolate": "#kongzhifuzwj# + (1823)　［+ #kongzhifufvs2#］",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MWM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #feiyuantoufuyin_bpfkK# / #mengguwenyuanyin# + (1823) ",
                         "description_mn_rcn": "                  ",
                         "description_zh_rcn": "在词末 [      ]以外 辅音或元音后面出现",
                         "description_en_rus": "It appears behind consonants excluding [      ] or vowel in the end of the word",
                         "rulesample": "     ()     ()        ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MWM12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  +(1823) +  #kongzhifufvs2# ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of the word",
                         "rulesample": "()（ ()）      ()（ ()）     ()（()）      ()（ ()）  ()   ()     () "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MWM20",
                  "ruleisolate": "#kongzhifuzwj# + (1823) + #kongzhifufvs1#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MWM21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #yuantoufuyin_bpfkK# +(1823) ",
                         "description_mn_rcn": "              ",
                         "description_zh_rcn": "在词末 [      ]辅音后面出现",
                         "description_en_rus": "It appears behind consonants [      ] in the end of the word",
                         "rulesample": "         ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MWM22",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#buzuchengyinjie#） +(1823) ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of the word",
                         "rulesample": "  ()     ()    ()        ()     ()   ()      ()     ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MWM23",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# +(1823) + #kongzhifufvs1# ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of the word",
                         "rulesample": " ()     "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "05",
          "unicode": "1824",
          "latincode": "v",
          "latinname": "U",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MVD10",
                "ruleisolate": "(1824) ［+ #kongzhifufvs3#］",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MVD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1824) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   },
                   {
                       "ruleno": "②",
                       "ruleindex": "MVD12 ",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1824) + #kongzhifufvs3#",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MVD20",
                  "ruleisolate": " (1824) + #kongzhifufvs1#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVD21",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1824) ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind the word as a case suffix",
                         "rulesample": " ()                ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MVD22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1824) + #kongzhifufvs1# ",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "独立式",
                         "description_en_rus": "Isolate Form",
                         "rulesample": "()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MVD30",
                  "ruleisolate": " (1824) + #kongzhifufvs2#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVD31",
                         "isexcluderule": "1",
                         "ismscmodel": "1",
                         "rulevalue": " (1824) + #kongzhifufvs2# ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind the word as a case suffix",
                         "rulesample": " ()                ()"
                     }
                  ]
              }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MVS10",
                  "ruleisolate": " (1824) ［+#kongzhifufvs2#］　+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1824) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()    ()      ()     ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MVS12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1824) +  #kongzhifufvs2# + #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": " ()（()）           ()（()）    ()       ()         () （()）     ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MVS20",
                  "ruleisolate": " (1824) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVS21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#feimengguwenzifu# + (1824) + (1824) + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "疑问助词",
                         "description_en_rus": "Interrogative particle",
                         "rulesample": " ()     ()        () （()）       () （()） "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MVS22",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1824) + 1828  + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix（ Genitive ） behind the word ",
                         "rulesample": " ()          "
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MVS23",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1824) + 1833 + #feimengguwenzifu# ",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix（ Genitive ） behind the word ",
                         "rulesample": " ()"
                     },
                     {
                         "ruleno": "④",
                         "ruleindex": "MVS24",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1824) + #kongzhifufvs1# + #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": " ()     ()      ()      () （()）   ()（()）      ()（()）     ()（()）    "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MVZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1824) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj#  + (1824) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial form",
                         "rulesample": "()  ()   ()()  ()()    ()   ()    ()    ()()   ()  ()        ()  ()        ()     ()     ()     ()   ()  ()（()）     ()（()）    ()（ ()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MVZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1824) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVZ21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1824) + #kongzhifufvs1# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "双词根词的第二个词的词首出现",
                         "description_en_rus": "It appears in the second word of the compound word",
                         "rulesample": "()     ()    ()  ()（()）  ()（()）   ()()（()()）  ()()（()()）    ()（()）   ()（()）    ()（()）    ()()（()()）   ()（()）   ()（()）         ()（()）  ()（() ）        ()（()）     ()（()）     ()（()）     ()（()）   ()（()）"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MVM10",
                  "ruleisolate": "#kongzhifuzwj# + (1824) ［+#kongzhifufvs2#］",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MVM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #feiyuantoufuyin_bpfkK# / #mengguwenyuanyin# + (1824) ",
                         "description_mn_rcn": "                  ",
                         "description_zh_rcn": "在词末 [      ]以外 辅音或元音后面出现",
                         "description_en_rus": "It appears behind consonants excluding [      ] or vowel in the end of the word",
                         "rulesample": "      ()     ()     ()  ()      ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MVM12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " #mengguwenzifuchuan#  +(1824) + #kongzhifufvs2# ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of the word",
                         "rulesample": "()（()）    ()（()）    ()       ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MVM13",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": " #kongzhifu202f#  +(1834)  +(1824)   ",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MVM20",
                  "ruleisolate": "#kongzhifuzwj# + (1824) + #kongzhifufvs1#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MVM21",
                          "isexcluderule": "0",
                          "ismscmodel": "0",
                          "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #yuantoufuyin_bpfkK# + (1824) ",
                          "description_mn_rcn": "              ",
                          "description_zh_rcn": "在词末 [      ]辅音后面出现",
                          "description_en_rus": "It appears behind consonants [      ] in the end of the word",
                          "rulesample": "   ()  ()   "
                      },
                      {
                          "ruleno": "②",
                          "ruleindex": "MVM22",
                          "isexcluderule": "0",
                          "ismscmodel": "0",
                          "rulevalue": "#mengguwenzifuchuan# （#buzuchengyinjie#） + (1824) ",
                          "description_mn_rcn": "   ",
                          "description_zh_rcn": "在词末出现",
                          "description_en_rus": "It appears in the end of the word",
                          "rulesample": " ()      ()      ()     "
                      },
                     {
                         "ruleno": "③",
                         "ruleindex": "MVM23",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " #mengguwenzifuchuan# + (1824) + #kongzhifufvs1# ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of the word",
                         "rulesample": "  ()     ()     ()       ()"
                     }                     
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "06",
          "unicode": "1825",
          "latincode": "o",
          "latinname": "OE",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MOD10",
                "ruleisolate": "(1825)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MOD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1825) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MOD20",
                "ruleisolate": "(1825) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MOD21",
                       "isexcluderule": "1",
                       "rulevalue": " (1825) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "单个词",
                       "description_en_rus": "single word",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MOS10",
                  "ruleisolate": " (1825) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MOS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1825) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()     ()     ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MOZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1825)  ［+#kongzhifufvs3#］ +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MOZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# +  #mengguwenyinxingyuanyin#  + (1825) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词中以双元音或复合元音形式出现",
                         "description_en_rus": "It appears as a diphthong in the medial of word",
                         "rulesample": "()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MOZ12",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#（#zuchengyinjie#） + (1825) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "                    ",
                         "description_zh_rcn": "在第二音节及以后的音节里出现（没有长牙）或双词根词的第二个词的词首出现",
                         "description_en_rus": "It appears behind the first syllable （without long tooth） or  in the second word of the compound word",
                         "rulesample": "()   ()   ()（()）      ()（()）"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MOZ13",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1825) + #kongzhifufvs3# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "        ",
                         "description_zh_rcn": "在第一音节里出现（没有长牙）",
                         "description_en_rus": "It appears in the first syllable  （without long tooth）",
                         "rulesample": "()（()）      ()（()） "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MOZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1825) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                    {
                        "ruleno": "①",
                        "ruleindex": "MOZ21",
                        "isexcluderule": "0",
                        "ismscmodel": "0",
                        "rulevalue": "#mengguwenzifuchuan#（#buzuchengyinjie#）  + (1825) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                        "description_mn_rcn": "       ",
                        "description_zh_rcn": "在第一音节里出现（有长牙）",
                        "description_en_rus": "It appears in the first syllable （with long tooth）",
                        "rulesample": "()       ()    ()   ()"
                    },
                     {
                         "ruleno": "②",
                         "ruleindex": "MOZ22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# /  #kongzhifuzwj# + (1825)  + #kongzhifufvs1# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "                   ",
                         "description_zh_rcn": "在第二音节及以后的音节里出现（有长牙）或双词根词的第二个词的词首出现",
                         "description_en_rus": "It appears behind the first syllable （with long tooth） or  in the second word of the compound word",
                         "rulesample": "()    ()      ()（()）      ()（()）      ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MOZ30",
                  "ruleisolate": "#kongzhifuzwj# + (1825) + #kongzhifufvs2# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MOZ31",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1825) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "                ",
                         "description_zh_rcn": "双词根词的第二个词的词首出现或第二音节及以后的音节里出现",
                         "description_en_rus": "It appears in the second word of the compound word or behind the first syllable",
                         "rulesample": "()      ()       ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MOM10",
                  "ruleisolate": "#kongzhifuzwj# + (1825) ［+#kongzhifufvs3#］",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MOM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#（#zuchengyinjie#） + #feiyuantoufuyin_bphgfkK# / #mengguwenyuanyin# + (1825) ",
                         "description_mn_rcn": "                    ",
                         "description_zh_rcn": "在词末， [        ] 以外辅音或元音后面出现",
                         "description_en_rus": "It appears behind consonants excluding  [         ] or vowel in the end of word ",
                         "rulesample": "()      ()       ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MOM12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  + (1825) + #kongzhifufvs3# ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of word",
                         "rulesample": " ()（()）   ()      () "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MOM20",
                  "ruleisolate": "#kongzhifuzwj# + (1825) + #kongzhifufvs1#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MOM21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#（#buzuchengyinjie#） +  (1825)  ",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在词末，辅音后面出现",
                         "description_en_rus": "It appears behind consonants in the end of word",
                         "rulesample": " ()        ()        ()     ()   ()   ()   ()   () "
                      },
                      {
                          "ruleno": "②",
                          "ruleindex": "MOM22",
                          "isexcluderule": "1",
                          "ismscmodel": "0",
                          "rulevalue": "#mengguwenzifuchuan# +  (1825) + #kongzhifufvs1# ",
                          "description_mn_rcn": "   ",
                          "description_zh_rcn": "在词末出现",
                          "description_en_rus": "It appears in the end of word",
                          "rulesample": " ()     ()    ()"
                      }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MOM30",
                  "ruleisolate": "#kongzhifuzwj# + (1825) + #kongzhifufvs2#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MOM31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #yuantoufuyin_bphgfkK#  + (1825) ",
                         "description_mn_rcn": "                ",
                         "description_zh_rcn": "在词末，[        ] 辅音后面出现",
                         "description_en_rus": "It appears behind consonants [        ] in the end of word",
                         "rulesample": "()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MOM32",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1825) + #kongzhifufvs2# ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末面出现",
                         "description_en_rus": "It appears in the end of word ",
                         "rulesample": "()（()）         ()（()）          ()（()）   ()（()）       ()（()）"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "07",
          "unicode": "1826",
          "latincode": "u",
          "latinname": "UE",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MUD10",
                "ruleisolate": "(1826) ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MUD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": "(1826) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MUD20",
                "ruleisolate": "(1826) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MUD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1826) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "单个词",
                       "description_en_rus": "single word",
                       "rulesample": "()   ()（()）     ()（()）       ()（()）"
                   }
                ]
            },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MUD30",
                  "ruleisolate": "(1826) + #kongzhifufvs2#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUD31",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1826) ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind word as a case suffix（Genitive） ",
                         "rulesample": " ()     ()       ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUD32",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1826) + #kongzhifufvs2# ",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "独立式",
                         "description_en_rus": "Isolate Form",
                         "rulesample": "()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MUD40",
                  "ruleisolate": "(1826) + #kongzhifufvs3#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUD41",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1826)  + #kongzhifufvs3#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears behind word as a case suffix（Genitive） ",
                         "rulesample": " ()     ()       ()"
                     }
                  ]
              }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MUS10",
                  "ruleisolate": " (1826) ［+  #kongzhifufvs2#］ +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1826) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()      ()       ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUS12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1826) + #kongzhifufvs2#  +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": " ()（()）     ()    ()    ()    ()      ()（()）      ()（()）  "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MUS20",
                  "ruleisolate": " (1826) +  #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUS21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#feimengguwenzifu# + (1826) + (1826) + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "疑问助词",
                         "description_en_rus": "Interrogative",
                         "rulesample": " ()       () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUS22",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1826) +  1828 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears behind the word as a case suffix（Dative）",
                         "rulesample": "  ()  "
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MUS23",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1826) +  1833 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears behind the word as a case suffix（Dative）",
                         "rulesample": "  ()      "
                     },
                     {
                         "ruleno": "④",
                         "ruleindex": "MUS24",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1826) + (#kongzhifufvs1#) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "在词首出现",
                         "description_en_rus": "in the behind the word",
                         "rulesample": "()      ()      ()（()）      ()（()）       ()（()）      () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MUZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1826) ［+ #kongzhifufvs3#］+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# + #mengguwenyinxingyuanyin# + (1826) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词中以双元音或复合元音形式出现",
                         "description_en_rus": "Medial form as a diphthong",
                         "rulesample": "()     ()    ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUZ12",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#（#zuchengyinjie#） +  (1826) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "                   ",
                         "description_zh_rcn": "在第二音节及以后的音节里 出现或双词根词的第二个词的词首出现（没有长牙）",
                         "description_en_rus": "It appears behind the first syllable or in the second word of the compound word （without long tooth）",
                         "rulesample": "()    ()     ()（()）"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MUZ13",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#feimengguwenzifu# + 182A + (1826) +  1826 + #feimengguwenzifu#",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "助词",
                         "description_en_rus": "Interrogative particle",
                         "rulesample": "()"
                     },
                     {
                         "ruleno": "④",
                         "ruleindex": "MUZ14",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +  1832  + (1826) + 1837 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()       "
                     },
                     {
                         "ruleno": "⑤",
                         "ruleindex": "MUZ15",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   1832  + (1826) + 1828 + 1822 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()        "
                     },
                     {
                         "ruleno": "⑥",
                         "ruleindex": "MUZ16",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +  1836  + (1826) + 182D + 1821 + 1828 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": "  ()"
                     },
                     {
                         "ruleno": "⑦",
                         "ruleindex": "MUZ17",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   182F + (1826) +  182D + 1821 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": "  ()   "
                     },
                     {
                         "ruleno": "⑧",
                         "ruleindex": "MUZ18",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   1828  + (1826) + 182D + 1826 + 1833 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()      "
                     },
                     {
                         "ruleno": "⑨",
                         "ruleindex": "MUZ19",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   1828  + (1826) + 182D + 1821 + 1828 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": "  ()"
                     },
                     {
                         "ruleno": "⑽",
                         "ruleindex": "MUZ1A",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   1833  + (1826) +  1828 + 1822 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()"
                     },
                     {
                         "ruleno": "⑾",
                         "ruleindex": "MUZ1B",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   1833  + (1826) +  182D + 1821 + 1837  + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": "  ()        () "
                     },
                     {
                         "ruleno": "⑿",
                         "ruleindex": "MUZ1C",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  +   1833  + (1826) + 1837 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": "  ()     "
                     },
                     {
                         "ruleno": "⒀",
                         "ruleindex": "MUZ1D",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": " #kongzhifu202f# + 1836 + (1826) +  182E + #feimengguwenzifu#",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "助词",
                         "description_en_rus": "Interrogative particle",
                         "rulesample": " ()"
                     },
                     {
                         "ruleno": "⒁",
                         "ruleindex": "MUZ1E",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f# + 1836 + (1826) +  182E + 1830 + 1821 + 1828 + #feimengguwenzifu#",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "助词",
                         "description_en_rus": "Interrogative particle",
                         "rulesample": " () "
                     },
                     {
                         "ruleno": "⒂",
                         "ruleindex": "MUZ1F",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#   /  #kongzhifuzwj# + (1826) + #kongzhifufvs3# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在第一音节里（没有长牙）",
                         "description_en_rus": "It appears in the first syllable （without long tooth）",
                         "rulesample": "  ()     ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MUZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1826) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#（#buzuchengyinjie#） /  #kongzhifuzwj# + (1826) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在第一音节里出现（有长牙）",
                         "description_en_rus": "It appears in the first syllable （with long tooth）",
                         "rulesample": "()           ()     ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUZ22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1826) + #kongzhifufvs1# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "                   ",
                         "description_zh_rcn": "在第二音节及以后的音节里出现或双词根词的第二个词的词首出现（有长牙）",
                         "description_en_rus": "It appears behind the first syllable or in the second word of the compound word （with long tooth）",
                         "rulesample": "()      ()     ()   ()    () "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MUZ30",
                  "ruleisolate": "#kongzhifuzwj# + (1826) + #kongzhifufvs2# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUZ31",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1826) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "               ",
                         "description_zh_rcn": "在第二音节及以后的音节里出现或双词根词的第二个词的词首出现",
                         "description_en_rus": "It appears behind the first syllable or in the second word of the compound word ",
                         "rulesample": "()     ()（() ）      ()（()）     ()（()）   ()（()）"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MUM10",
                  "ruleisolate": "#kongzhifuzwj# + (1826) ［+#kongzhifufvs3# ］",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #feiyuantoufuyin_bphgfkK# / #mengguwenyuanyin# + (1826) ",
                         "description_mn_rcn": "                     ",
                         "description_zh_rcn": "在词末， [         ]以外辅音或元音后面出现",
                         "description_en_rus": "It appears behind consonants excluding  [         ]or vowel in the end of word",
                         "rulesample": "()  ()    ()      () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUM12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  + (1826) + #kongzhifufvs3#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of word",
                         "rulesample": " ()（()）         ()（()）     ()  ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MUM13",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": " #kongzhifu202f#  +(1834)  +(1826)   ",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MUM20",
                  "ruleisolate": "#kongzhifuzwj# + (1826) + #kongzhifufvs1#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MUM21",
                          "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#（#buzuchengyinjie#） + (1826)  ",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在词末，辅音后面出现",
                         "description_en_rus": "It appears behind consonants in the end of word",
                         "rulesample": " ()   ()    () "
                      },
                      {
                          "ruleno": "②",
                          "ruleindex": "MUM22",
                          "isexcluderule": "1",
                          "ismscmodel": "0",
                          "rulevalue": "#mengguwenzifuchuan# + (1826) + #kongzhifufvs1# ",
                          "description_mn_rcn": "    ",
                          "description_zh_rcn": "在词末出现",
                          "description_en_rus": "It appears in the end of word",
                          "rulesample": " ()     ()    ()   ()     ()（()）   ()（()）      ()（()）"
                      }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MUM30",
                  "ruleisolate": "#kongzhifuzwj# + (1826) + #kongzhifufvs2#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MUM31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# （#zuchengyinjie#） + #yuantoufuyin_bphgfkK# + (1826) ",
                         "description_mn_rcn": "                 ",
                         "description_zh_rcn": "在词末， [         ]辅音后面出现",
                         "description_en_rus": "It appears behind consonants  [         ]in the end of word",
                         "rulesample": "()         ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MUM32",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1826) + #kongzhifufvs2# ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词末出现",
                         "description_en_rus": "It appears in the end of word ",
                         "rulesample": "()（()）           ()（()）          ()（()）    ()（()）   ()（()）      ()（()）"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MUM33",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": " #kongzhifu202f#  +(182C)  +(1826)   ",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "It appears as a case suffix",
                         "rulesample": " ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "08",
          "unicode": "1827",
          "latincode": "E",
          "latinname": "EE",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XED10",
                "ruleisolate": "(1827)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XED11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1827) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XES10",
                  "ruleisolate": " (1827) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XES11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1827) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()   "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XEZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1827) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XEZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1827) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial Form",
                         "rulesample": "()       ()     ()     ()    ()    ()   () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XEM10",
                  "ruleisolate": "#kongzhifuzwj# + (1827)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XEM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# +  (1827)  ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final Form",
                         "rulesample": "()       ()     ()     ()   ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "09",
          "unicode": "1828",
          "latincode": "n",
          "latinname": "NA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MND10",
                "ruleisolate": "(1828)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MND11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1828) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MND20",
                  "ruleisolate": " (1828) +  #kongzhifufvs1#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MND21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1828) +  #kongzhifufvs1# ",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "独立式",
                         "description_en_rus": "Isolate Form",
                         "rulesample": "  () "
                     }
                  ]
              }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MNS10",
                  "ruleisolate": " (1828) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1828) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "  ()   ()   ()    ()    ()   ()     ()     ()       ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MNS20",
                  "ruleisolate": " (1828) +  #kongzhifufvs1# + #kongzhifuzwj#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MNS21",                     
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1828) +  #kongzhifufvs1# +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "  () （()）   () （()）     ()（()）       ()（()） ()    ()     ()      ()       ()        ()      ()      ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MNZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1828)  ［+ #kongzhifufvs2#］+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) + #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      #fujiazifu#  ",
                         "description_zh_rcn": "在词中辅音前面以#fujiazifu#形式出现",
                         "description_en_rus": "It appears in the medial of word and in front of consonant as a #fujiazifu#",
                         "rulesample": "()     ()      ()      ()（()）"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MNZ12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) + #kongzhifufvs2# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      #fujiazifu#  ",
                         "description_zh_rcn": "在词中元音前面#fujiazifu#形式出现",
                         "description_en_rus": "It appears in the medial of word and in front of vowel as a #fujiazifu#",
                         "rulesample": "()   ()    ()     ()  ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MNZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1828) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) + #mengguwenyuanyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "在词中，元音前面出现",
                         "description_en_rus": "It appears in the medial of word and in front of vowel",
                         "rulesample": "()    ()    ()    ()    ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MNZ22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) + #kongzhifufvs1# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在词中，辅音前面出现",
                         "description_en_rus": "It appears in the medial of word and in front of consonant ",
                         "rulesample": "()    ()      ()      ()   ()（()）     ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MNZ30",
                  "ruleisolate": "#kongzhifuzwj# +  (1828)  ［+  #kongzhifufvs1#］ + #kongzhifumvs# ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNZ31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) +  #kongzhifumvs# ",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前面分开写",
                         "description_en_rus": "In the medial of word, it is written separately from separate [   ]- Tsatslag",
                         "rulesample": "()       ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MNZ32",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) + #kongzhifufvs1# + #kongzhifumvs# ",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前面分开写",
                         "description_en_rus": "In the medial of word, it is written separately from separate [   ]- Tsatslag",
                         "rulesample": "()       ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MNZ40",
                  "ruleisolate": "#kongzhifuzwj# + (1828) +  #kongzhifufvs2# + #kongzhifumvs# ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNZ41",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1828) +  #kongzhifufvs2# + #kongzhifumvs# ",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前面分开写",
                         "description_en_rus": "In the medial of word, it is written separately from separate [   ]- Tsatslag",
                         "rulesample": "()（()）       ()（()）"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MNM10",
                  "ruleisolate": "#kongzhifuzwj# + (1828)  ［+  #kongzhifufvs2#］",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1828) ",
                         "description_mn_rcn": "   #fujiazifu#      ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu# ",
                         "rulesample": "()        ()    ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MNM12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1828) + #kongzhifufvs2#",
                         "description_mn_rcn": "   #fujiazifu#      ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu# ",
                         "rulesample": "()        ()    ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MNM20",
                  "ruleisolate": "#kongzhifuzwj# + (1828) +  #kongzhifufvs1#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MNM21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1828) +  #kongzhifufvs1# ",
                         "description_mn_rcn": "   #fujiazifu#      ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu# ",
                         "rulesample": "() （()） () （()）        ()  （()）    () （()）"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "10",
          "unicode": "1829",
          "latincode": "N",
          "latinname": "ANG",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XND10",
                "ruleisolate": "(1829)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XND11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1829) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XNS10",
                  "ruleisolate": " (1829) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XNS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1829) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XNZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1829) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XNZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1829) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   #fujiazifu#   ",
                         "description_zh_rcn": "词中#fujiazifu#形式出现",
                         "description_en_rus": "It appears as a #fujiazifu# in the medial of word",
                         "rulesample": "()  ()     ()    () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XNM10",
                  "ruleisolate": "#kongzhifuzwj# + (1829)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XNM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1829)",
                         "description_mn_rcn": "   #fujiazifu#  ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#",
                         "rulesample": "()    ()      ()  "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "11",
          "unicode": "182A",
          "latincode": "b",
          "latinname": "BA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MBD10",
                "ruleisolate": "(182A)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MBD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (182A) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MBS10",
                  "ruleisolate": "(182A) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MBS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182A) + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()    ()    ()   ()    ()    ()     ()     ()     ()      ()     ()     ()    ()   "
                     }
                  ]
              }
          ],
          "medial": [     
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MBZ10",
                  "ruleisolate": "#kongzhifuzwj# + (182A) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MBZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182A) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "Medial form",
                         "rulesample": "()   ()   ()    () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MBM10",
                  "ruleisolate": "#kongzhifuzwj# + (182A)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MBM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182A) ",
                         "description_mn_rcn": "   #fujiazifu#  ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#",
                         "rulesample": "()             ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "12",
          "unicode": "182B",
          "latincode": "p",
          "latinname": "PA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MPD10",
                "ruleisolate": "(182B)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MPD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (182B) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MPS10",
                  "ruleisolate": " (182B) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MPS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182B) + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()    ()    ()   ()    ()    () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MPZ10",
                  "ruleisolate": "#kongzhifuzwj# + (182B) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MPZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182B) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "Medial form",
                         "rulesample": "()     ()   ()    ()    ()    () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MPM10",
                  "ruleisolate": "#kongzhifuzwj# + (182B)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MPM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182B) ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()   () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "13",
          "unicode": "182C",
          "latincode": "h",
          "latinname": "QA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MHD10",
                "ruleisolate": "(182C) ［+ #kongzhifufvs3# ］",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MHD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (182C) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MHD20",
                "ruleisolate": "(182C) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MHD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (182C) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "3",
                "ruleindex": "MHD30",
                "ruleisolate": "(182C) + #kongzhifufvs2#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MHD31",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (182C) + #kongzhifufvs2# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "4",
                "ruleindex": "MHD40",
                "ruleisolate": "(182C) + #kongzhifufvs4#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MHD41",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (182C) + #kongzhifufvs3# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MHS10",
                  "ruleisolate": "(182C)  ［+ #kongzhifufvs3# ］ +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182C) +  #mengguwenyangxingyuanyin# + #mengguwenzifuchuan# / #feimengguwenzifu# / #kongzhifuzwj#",
                         "description_mn_rcn": "       4 5      ",
                         "description_zh_rcn": "在词首，[   4 5 ] 元音前面出现",
                         "description_en_rus": "In the head of word, it appears in front of vowel  [  4 5 ]",
                         "rulesample": " ()       ()          ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MHS12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (182C) + #kongzhifufvs3# + #mengguwenzifuchuan#",
                         "description_mn_rcn": "          6 7    / #mengguwenfuyin#   （ ）",
                         "description_zh_rcn": "在词首， [       6  7  ]元音 / #mengguwenfuyin#前面出现（以阳性形式）",
                         "description_en_rus": "In the head of word, it appears in front of vowel  [    6 7  ] / #mengguwenfuyin# （by masculine form）",
                         "rulesample": "  ()（()）       ()（()）     ()（()）      ()（()）     ()（()）      ()（()）    ()（()）     ()（()）    ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MHS20",
                  "ruleisolate": "(182C) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MHS21",
                          "isexcluderule": "1",
                          "ismscmodel": "0",
                          "rulevalue": " (182C) +  #kongzhifufvs1# + #mengguwenzifuchuan# ",
                          "description_mn_rcn": "      ",
                          "description_zh_rcn": "在词首出现",
                          "description_en_rus": "In the head of word",
                          "rulesample": " ()（()）       ()（()）       ()（()）   ()（()）       ()（()）     ()（()）      ()（()）     ()（()）      ()（()）    ()（()）     ()（()）    ()（()）"
                      }                      
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MHS30",
                  "ruleisolate": "(182C) + #kongzhifufvs2# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHS31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182C) +  #mengguwenyinxingyuanyin# / #mengguweni# + #mengguwenzifuchuan# / #feimengguwenzifu# / #kongzhifuzwj#",
                         "description_mn_rcn": "             6  7      ",
                         "description_zh_rcn": "在词首， [       6  7  ]元音前面出现",
                         "description_en_rus": "In the head of word, it appears in front of vowel  [       6  7  ]",
                         "rulesample": "    ()       ()     ()      ()     ()      ()    ()     ()    () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MHS32",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182C) + #mengguwenfuyin#  + #mengguwenzifuchuan# / #feimengguwenzifu# / #kongzhifuzwj#",
                         "description_mn_rcn": "       #mengguwenfuyin#    ",
                         "description_zh_rcn": "在词首， #mengguwenfuyin#前面出现",
                         "description_en_rus": "In the head of word, it appears in front of  #mengguwenfuyin#",
                         "rulesample": " ()       ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MHS33",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (182C) + #kongzhifufvs2# + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "      4 5     （ ）",
                         "description_zh_rcn": "在词首，[   4 5 ] 元音前面出现（以阴性形式）",
                         "description_en_rus": "In the head of word, it appears in front of vowel  [  4 5 ]（by feminine form）",
                         "rulesample": " ()（()）       ()（()）          ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MHS40",
                  "ruleisolate": "(182C) + #kongzhifufvs4# +  #kongzhifuzwj#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MHS41",
                          "isexcluderule": "1",
                          "ismscmodel": "0",
                          "rulevalue": " (182C) + #kongzhifufvs4# + #mengguwenzifuchuan# ",
                          "description_mn_rcn": "         ",
                          "description_zh_rcn": "在词首出现",
                          "description_en_rus": "In the head of word",
                          "rulesample": "    ()       ()     ()      ()     ()      ()    ()     ()    ()   ()（()）       ()（()）          ()（()）"
                      }                     
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MHZ10",
                  "ruleisolate": "#kongzhifuzwj# + (182C)  ［+ #kongzhifufvs3# ］ +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) +  #mengguwenyangxingyuanyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      4 5     ",
                         "description_zh_rcn": "在词中，[   4 5 ]元音前面出现",
                         "description_en_rus": "In the medial of word, it appears in front of [   4 5 ] vowel .",
                         "rulesample": "()        ()         ()       ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MHZ12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) + #kongzhifufvs3# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "        6  7    / #mengguwenfuyin#  ",
                         "description_zh_rcn": "在词中，  [     6  7   ]元音 / #mengguwenfuyin#前面出现",
                         "description_en_rus": "In the medial of word, it appears in front of  vowel [      6 7  ] / #mengguwenfuyin#.",
                         "rulesample": "()（()）   ()（()）  ()（()）    ()()（()()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MHZ20",
                  "ruleisolate": "#kongzhifuzwj# + (182C)　+  #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHZ21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) + #kongzhifufvs1# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word .",
                         "rulesample": " ()（()）        ()（()）         ()（()）       ()（()）   ()（()）   ()（()）    ()（()）    ()()（()()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MHZ30",
                  "ruleisolate": "#kongzhifuzwj# + (182C) + #kongzhifufvs2# + #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHZ31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) + #mengguwenyinxingyuanyin# / #mengguweni# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       6 7      ",
                         "description_zh_rcn": "在词中，[    6 7   ]元音前面出现",
                         "description_en_rus": "In the medial of word, it appears in front of vowel [    6  7  ] . ",
                         "rulesample": "()    ()()  "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MHZ32",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C)  + #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    #mengguwenfuyin#  ",
                         "description_zh_rcn": "在词中#mengguwenfuyin#前面出现",
                         "description_en_rus": "In the medial of word, it appears in front of masculine vowel .",
                         "rulesample": "()   ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MHZ33",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) + #kongzhifufvs2# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在词中阳性元音前面出现",
                         "description_en_rus": "In the medial of word, it appears in front of masculine vowel .",
                         "rulesample": "()（()）        ()（()）         ()（()）       ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MHZ40",
                  "ruleisolate": "#kongzhifuzwj# + (182C) + #kongzhifufvs4# + #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHZ41",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) + #kongzhifufvs4# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word .",
                         "rulesample": " ()（()）    ()()（()()）     ()（()）        ()（()）         ()（()）       ()（()）    ()（()）   ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "5",
                  "ruleindex": "MHZ50",
                  "ruleisolate": "#kongzhifuzwj# + (182C) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHZ51",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " #mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) +  #kongzhifumvs# ",
                         "description_mn_rcn": "          ",
                         "description_zh_rcn": "词中，[  ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it appears in front of separate [  ] - Tsatslag .",
                         "rulesample": "()    ()     () "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "6",
                  "ruleindex": "MHZ60",
                  "ruleisolate": "#kongzhifuzwj# + (182C) +  #kongzhifufvs1# + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHZ61",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182C) +  #kongzhifufvs1# +  #kongzhifumvs# ",
                         "description_mn_rcn": "          ",
                         "description_zh_rcn": "词中，[  ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it appears in front of separate [  ] - Tsatslag .",
                         "rulesample": "()（()）    ()（()）     ()（()）  "
                     }
                  ]
              }
          ],
          "final": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MHM10",
                  "ruleisolate": "#kongzhifuzwj# + (182C) ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182C) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form",
                         "rulesample": "()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MHM20",
                  "ruleisolate": "#kongzhifuzwj# + (182C) + #kongzhifufvs1#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MHM21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182C) + #kongzhifufvs1# ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "14",
          "unicode": "182D",
          "latincode": "g",
          "latinname": "GA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MGD10",
                "ruleisolate": "(182D)  ［+ #kongzhifufvs3# ］",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MGD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (182D) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MGD20",
                "ruleisolate": "(182D) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MGD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (182D) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "3",
                "ruleindex": "MGD30",
                "ruleisolate": "(182D) + #kongzhifufvs2#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MGD31",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (182D) + #kongzhifufvs2# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "4",
                "ruleindex": "MGD40",
                "ruleisolate": "(182D) + #kongzhifufvs4#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MGD41",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (182D) + #kongzhifufvs4# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MGS10",
                  "ruleisolate": "(182D)  ［+ #kongzhifufvs3# ］ +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182D) +  #mengguwenyangxingyuanyin#  + #mengguwenzifuchuan# / #feimengguwenzifu# / #kongzhifuzwj#",
                         "description_mn_rcn": "      4 5      ",
                         "description_zh_rcn": "在词首，[   4 5] 元音前面出现",
                         "description_en_rus": "In the head of word, it appears in front of vowel [   4 5 ]",
                         "rulesample": "()    ()     ()     ()    ()     ()"
                     },
                       {
                           "ruleno": "②",
                           "ruleindex": "MGS12",
                           "isexcluderule": "1",
                           "ismscmodel": "0",
                           "rulevalue": " (182D) + #kongzhifufvs3# + #mengguwenzifuchuan#",
                           "description_mn_rcn": "          6 7    / #mengguwenfuyin#    （ ）",
                           "description_zh_rcn": "在词首， [     6  7   ]元音 / #mengguwenfuyin#前面出现（以阳性形式）",
                           "description_en_rus": "In the head of word, it appears in front of vowel  [   6 7  ]  or #mengguwenfuyin# （by masculine form）",
                           "rulesample": "()（()）  ()（()）     ()（()）    ()（()）        ()（()） "
                       }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MGS20",
                  "ruleisolate": "(182D) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGS21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (182D) + #kongzhifufvs1# +  #mengguwenzifuchuan#  ",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "在词首出现",
                         "description_en_rus": "In the head of word",
                         "rulesample": "()（()）    ()（()）     ()（()）     ()（()）    ()（()）     ()（()）    ()（()）   ()（()）     ()（()）    ()（()）        ()（()） "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MGS30",
                  "ruleisolate": "(182D) + #kongzhifufvs2# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGS31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182D) +  #mengguwenyinxingyuanyin# / #mengguweni# + #mengguwenzifuchuan# / #feimengguwenzifu# / #kongzhifuzwj#",
                         "description_mn_rcn": "          6  7      ",
                         "description_zh_rcn": "在词首，[      6  7   ]元音前面出现",
                         "description_en_rus": "In the head of word, it appears in front of  vowel [    6 7  ] ",
                         "rulesample": " ()    ()()   ()      ()    ()     ()    ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGS32",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182D) + #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu# / #kongzhifuzwj#",
                         "description_mn_rcn": "        ",
                         "description_zh_rcn": "在词首，辅音前面出现",
                         "description_en_rus": "In the head of word, it appears in front of consonant  ",
                         "rulesample": "()    ()    ()        ()      "
                     },
                       {
                           "ruleno": "③",
                           "ruleindex": "MGS33",
                           "isexcluderule": "1",
                           "ismscmodel": "0",
                           "rulevalue": " (182D) + #kongzhifufvs2# + #mengguwenzifuchuan# ",
                           "description_mn_rcn": "      4 5     （ ）",
                           "description_zh_rcn": "在词首，[   4 5 ] 元音前面出现（以阴性形式）",
                           "description_en_rus": "In the head of word, it appears in front of vowel  [  4 5 ]（by feminine form）",
                           "rulesample": "() "
                       }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MGS40",
                  "ruleisolate": "(182D) + #kongzhifufvs4# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGS41",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (182D) + #kongzhifufvs4# +  #mengguwenzifuchuan# ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "在词首出现",
                         "description_en_rus": "In the head of word",
                         "rulesample": "()（()）    ()()（()()）         ()      ()    ()     ()    ()    ()（()）     ()（()）    ()（()）        ()（()） "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MGZ10",
                  "ruleisolate": "#kongzhifuzwj# + (182D)  ［+ #kongzhifufvs3# ］ +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182D) + #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# {#yangxingci#}",
                         "description_mn_rcn": "   #mengguwenfuyin#  #fujiazifu#    （   ）",
                         "description_zh_rcn": "在词中，在#mengguwenfuyin#之前，以#fujiazifu#形式出现（阳性词里）",
                         "description_en_rus": "In the medial of word, it appears as #fujiazifu# before #mengguwenfuyin#（In the masculine word）",
                         "rulesample": "()     ()    ()     ()       ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGZ12",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + #mengguwensdfuyin# + (182D)  +  #mengguwenyangxingyuanyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "          #mengguwenyangxingyuanyin#   （   ）",
                         "description_zh_rcn": "在词中，[   ] 辅音后面#mengguwenyangxingyuanyin#之前（没有点）",
                         "description_en_rus": "In the medial of word, it appears without dots behind consonants [   ],before #mengguwenyangxingyuanyin# ",
                         "rulesample": "()      ()     () "
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MGZ13",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " #mengguwenzifuchuan#  /  #kongzhifuzwj# +  (182D) + #kongzhifufvs3# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word",
                         "rulesample": "()（()）     ()（()）   ()（()）  ()（()）    ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MGZ20",
                  "ruleisolate": "#kongzhifuzwj# + (182D)  + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182D) +  #mengguwenyangxingyuanyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       4 5      ",
                         "description_zh_rcn": "在词中，[  4 5 ] 阳性元音前面出现",
                         "description_en_rus": "In the medial of word, it appears in front of vowel [   4 5 ]",
                         "rulesample": "()    ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGZ22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182D) +  #kongzhifufvs1# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word",
                         "rulesample": "()（()） ()（()） ()（()） ()（()） ()（()）  ()（()） ()（()） ()（()） ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MGZ30",
                  "ruleisolate": "#kongzhifuzwj# + (182D) + #kongzhifufvs2# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGZ31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# +  (182D) + #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# {#yinxingci#}",
                         "description_mn_rcn": "   #mengguwenfuyin#  #fujiazifu#   （    ）",
                         "description_zh_rcn": "词中#mengguwenfuyin#之前，以#fujiazifu#形式出现（阴性词里）",
                         "description_en_rus": "In the medial of word, it appears as #fujiazifu#（in feminine word） before #mengguwenfuyin#",
                         "rulesample": "()     ()      ()     ()    ()   ()   ()   ()   ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGZ32",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# +  (182D) + #mengguwenyinxingyuanyin# / #mengguweni#  + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# {#yinxingci#}",
                         "description_mn_rcn": "       6 7      ",
                         "description_zh_rcn": "词中阴性元音[     6 7   ]前出现",
                         "description_en_rus": "In the medial of word, front of Negative vowel [    6 7   ]",
                         "rulesample": "    ()    ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MGZ33",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182D) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "词中形式出现",
                         "description_en_rus": "In the medial of word",
                         "rulesample": "()（()）      ()（()）   ()（()）      ()（()）      ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MGZ40",
                  "ruleisolate": "#kongzhifuzwj# + (182D) + #kongzhifufvs4# +  #kongzhifuzwj#",
                  "rules": [
                    {
                        "ruleno": "①",
                        "ruleindex": "MGZ41",
                        "isexcluderule": "1",
                        "ismscmodel": "0",
                        "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# +  (182D) + #kongzhifufvs4# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                        "description_mn_rcn": "    ",
                        "description_zh_rcn": "词中出现",
                        "description_en_rus": "In the medial of word",
                        "rulesample": "()（()）  ()（()）   ()（()）  ()（()）   ()（()）  ()（()）  ()（()）    ()（()）  ()（()）   ()    ()   ()（()）  ()（()）"
                    }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "5",
                  "ruleindex": "MGZ50",
                  "ruleisolate": "#kongzhifuzwj# +  (182D) +［ #kongzhifufvs3# +］+ #kongzhifumvs# ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGZ51",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " #mengguwenzifuchuan#  /  #kongzhifuzwj# +  (182D) +  #kongzhifumvs# ",
                         "description_mn_rcn": "          ",
                         "description_zh_rcn": "词中，[  ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it appears in front of separate [  ] - Tsatslag .",
                         "rulesample": "()       ()      ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGZ52",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182D) + #kongzhifufvs3# +  #kongzhifumvs# ",
                         "description_mn_rcn": "                 ",
                         "description_zh_rcn": "在词中，[   ] 辅音后面，元音[  ]之前分写时",
                         "description_en_rus": "In the medial of word, it appears behind consonants [   ],before Vowel [  ]",
                         "rulesample": "()（()）    ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "6",
                  "ruleindex": "MGZ60",
                  "ruleisolate": "#kongzhifuzwj# + (182D) + #kongzhifufvs1# + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGZ61",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj# + #mengguwensdfuyin# + (182D) + #kongzhifumvs# ",
                         "description_mn_rcn": "                  （   ）",
                         "description_zh_rcn": "在词中，[   ] 辅音后面，元音[  ]之前分写时（没有点）",
                         "description_en_rus": "In the medial of word, it appears behind consonants [   ],before Vowel [  ]（without dots）",
                         "rulesample": "()    ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGZ62",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182D) + #kongzhifufvs1# +  #kongzhifumvs#",
                         "description_mn_rcn": "          ",
                         "description_zh_rcn": "词中，[  ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it appears in front of separate [  ] - Tsatslag .",
                         "rulesample": "()（()）       ()（()）      ()（()）"
                     }
                  ]
              }
          ],
          "final": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MGM10",
                  "ruleisolate": "#kongzhifuzwj# + (182D) 　［+ #kongzhifufvs1#］",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182D)  {#yangxingci#}",
                         "description_mn_rcn": "   #fujiazifu#   （   ）",
                         "description_zh_rcn": "词末#fujiazifu#形式出现（阳性词里）",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#（in masculine word）",
                         "rulesample": "()   ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGM12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182D) + #kongzhifufvs1#",
                         "description_mn_rcn": "   #fujiazifu#   ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#",
                         "rulesample": "()       () ()     ()（()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MGM20",
                  "ruleisolate": "#kongzhifuzwj# + (182D) + #kongzhifufvs2#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGM21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182D)    {#yinxingci#}",
                         "description_mn_rcn": "   #fujiazifu#   （  ）",
                         "description_zh_rcn": "词末#fujiazifu#形式出现（阴性词里）",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#（in feminine word）",
                         "rulesample": "()     ()    ()      ()    () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MGM22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182D) + #kongzhifufvs2# ",
                         "description_mn_rcn": "   #fujiazifu#   ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#",
                         "rulesample": "()  （ () ）    "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MGM30",
                  "ruleisolate": "#kongzhifuzwj# + (182D) + #kongzhifufvs3#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MGM31",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182D) + #kongzhifufvs3#  ",
                         "description_mn_rcn": "   #fujiazifu#   ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#",
                         "rulesample": "()（()）      ()（()）     ()（()）        ()（()）    ()（()）   ()（()）    ()（()）    ()（()）     ()（()）    ()（()）      ()（()） "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "15",
          "unicode": "182E",
          "latincode": "m",
          "latinname": "MA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MMD10",
                "ruleisolate": "(182E)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MMD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (182E) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MMS10",
                  "ruleisolate": " (182E) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MMS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182E) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()      ()   ()    ()   ()   ()     ()      ()      () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MMZ10",
                  "ruleisolate": "#kongzhifuzwj# + (182E) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MMZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182E) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial form",
                         "rulesample": "  ()    ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MMZ20",
                  "ruleisolate": "#kongzhifuzwj# + (182E) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MMZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182E) +  #kongzhifumvs# ",
                         "description_mn_rcn": "           ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel  [   ]",
                         "rulesample": " ()   ()     "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MMM10",
                  "ruleisolate": "#kongzhifuzwj# + (182E)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MMM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182E) ",
                         "description_mn_rcn": "    #fujiazifu#  ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#.",
                         "rulesample": "()        ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "16",
          "unicode": "182F",
          "latincode": "l",
          "latinname": "LA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MLD10",
                "ruleisolate": "(182F)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MLD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (182F) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MLS10",
                  "ruleisolate": "(182F) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MLS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (182F) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()  ()   ()   ()     ()    ()     ()    "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MLZ10",
                  "ruleisolate": "#kongzhifuzwj# + (182F) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MLZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182F) + #mengguwenzifuchuan#  /  #kongzhifuzwj# ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial form",
                         "rulesample": "  ()       ()     ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MLZ20",
                  "ruleisolate": "#kongzhifuzwj# + (182F) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MLZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (182F) +  #kongzhifumvs#",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": "()    ()     ()     () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MLM10",
                  "ruleisolate": "#kongzhifuzwj# + (182F)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MLM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (182F) ",
                         "description_mn_rcn": "    #fujiazifu#  ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#.",
                         "rulesample": "()       ()      ()     ()       ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "17",
          "unicode": "1830",
          "latincode": "s",
          "latinname": "SA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MSD10",
                "ruleisolate": "(1830)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MSD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1830) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MSS10",
                  "ruleisolate": " (1830) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MSS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1830) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "() ()    ()    ()      ()     ()    () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MSZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1830) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MSZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1830) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial form ",
                         "rulesample": "()  ()    ()       ()   ()        ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MSZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1830) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MSZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1830) +  #kongzhifumvs# ",
                         "description_mn_rcn": "           ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MSM10",
                  "ruleisolate": "#kongzhifuzwj# + (1830)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MSM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1830) ",
                         "description_mn_rcn": "    #fujiazifu#  ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#.",
                         "rulesample": "()  ()  ()   ()    () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "18",
          "unicode": "1831",
          "latincode": "x",
          "latinname": "SHA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MXD10",
                "ruleisolate": "(1831) ",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MXD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1831) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MXD20",
                "ruleisolate": "(1831) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MXD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1831) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MXS10",
                  "ruleisolate": " (1831)  ［+#kongzhifufvs2#］+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MXS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1831) + #feiiyuanyin# / #mengguwenfuyin# + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "                 ",
                         "description_zh_rcn": "在词首，[  ] 以外元音或辅音前出现字形",
                         "description_en_rus": "In the head of the word, it appears in front of vowel [ ] or consonant",
                         "rulesample": "()  ()   () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MXS12",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1831) + #mengguwenyuanyin# + #feimengguwenzifu#",
                         "description_mn_rcn": " ",
                         "description_zh_rcn": "  在字母表里出现",
                         "description_en_rus": "In the head of word.",
                         "rulesample": "   ()    ()    ()      ()       ()        ()      ()      ()  "
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MXS13",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1831) + #kongzhifufvs2# +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "           （   ）",
                         "description_zh_rcn": "  在词首， [ ] 元音前面出现（有点）",
                         "description_en_rus": "In the head of the word, it appears in front of vowel [  ] （with dot – dusul）",
                         "rulesample": "()     ()     ()      "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MXS20",
                  "ruleisolate": " (1831) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MXS21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1831) +  #mengguweni# + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "             （  ）",
                         "description_zh_rcn": "  在词首， [ ] 元音前面出现（没有点）",
                         "description_en_rus": "In the head of the word, it appears in front of vowel [  ] （without dot – dusul）",
                         "rulesample": "()      ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MXS22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1831) + #kongzhifufvs1# + #mengguwenzifuchuan#",
                         "description_mn_rcn": "          /     ",
                         "description_zh_rcn": "在词中，[  ] 以外元音/辅音前面出现",
                         "description_en_rus": "In the medial of the word, it appears in front of vowel [ ] or consonant",
                         "rulesample": "()（()）  ()（()）   ()（()）   ()    ()    ()      ()       ()        ()      ()      () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MXZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1831)  ［+#kongzhifufvs2#］  +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MXZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1831) + #feiiyuanyin# / #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         4 5 6 7         ",
                         "description_zh_rcn": "在词中，[    4 5 6 7  ] 或辅音前出现字形",
                         "description_en_rus": "In the medial of the word, it appears in front of vowel [   4 5 6 7   ] or consonant",
                         "rulesample": "()      ()   () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MXZ12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1831) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "           （   ）",
                         "description_zh_rcn": "在词中，[  ] 元音前面出现（有点）",
                         "description_en_rus": "In the medial of the word, it appears in front of vowel [ ]  （with dot – dusul）",
                         "rulesample": " ()     () "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MXZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1831) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MXZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1831) + #mengguweni# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "           （  ）",
                         "description_zh_rcn": "在词中，[  ] 元音前面出现（没有点）",
                         "description_en_rus": "In the medial of the word, it appears in front of vowel [ ] （without dot – dusul）",
                         "rulesample": "()    ()   ()    ()     ()   "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MXZ22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1831) + #kongzhifufvs1# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "         4 5 6 7           （  ）",
                         "description_zh_rcn": "在词中，[    4 5 6 7  ] 或辅音前出现字形（没有点）",
                         "description_en_rus": "In the medial of the word, it appears in front of vowel [   4 5 6 7   ] or consonant  （without dot – dusul）",
                         "rulesample": "()（()）     ()（()）   ()（()） "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MXZ30",
                  "ruleisolate": "#kongzhifuzwj# + (1831) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MXZ31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1831) +  #kongzhifumvs# ",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": " ()          ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MXM10",
                  "ruleisolate": "#kongzhifuzwj# + (1831)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MXM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1831)",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词末形式出现",
                         "description_en_rus": "In the end of word, it appears as suffix.",
                         "rulesample": " ()        ()       () ()       () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "19",
          "unicode": "1832",
          "latincode": "t",
          "latinname": "TA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MTD10",
                "ruleisolate": "(1832)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MTD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1832) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MTS10",
                  "ruleisolate": " (1832) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MTS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1832) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()    ()     ()      ()      ()      ()     ()    ()   ()   ()    ()    ()   "
                     }
                  ]
              }
          ],
          "medial": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MTZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1832) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MTZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1832) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "在词中，平头出现",
                         "description_en_rus": "In the medial of word, it appears in horizontal form.",
                         "rulesample": "     ()       ()     ()      () "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MTZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1832) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MTZ21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1832) + #kongzhifufvs1# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中圆头形式出现",
                         "description_en_rus": "In the medial of word, it appears in vertical form",
                         "rulesample": "  ()      ()     ()    () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MTM10",
                  "ruleisolate": "#kongzhifuzwj# + (1832)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MTM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1832) ",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词末形式出现",
                         "description_en_rus": "In the end of word, it appears as suffix.",
                         "rulesample": "()   ()    () ()  "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "20",
          "unicode": "1833",
          "latincode": "d",
          "latinname": "DA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MDD10",
                "ruleisolate": "(1833)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MDD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1833) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MDD20",
                "ruleisolate": "(1833) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MDD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1833) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MDS10",
                  "ruleisolate": " (1833) ［+ #kongzhifufvs2#］+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MDS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1833) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在词首，圆形式出现",
                         "description_en_rus": "In the head of word, it appears in vertical form.",
                         "rulesample": "()     ()        ()      ()     ()      "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MDS12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1833) + #kongzhifufvs2# +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在字母表里出现",
                         "description_en_rus": "In the head of word.",
                         "rulesample": "  ()    ()     ()      ()       ()        ()      ()      ()  "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MDS20",
                  "ruleisolate": " (1833) + #kongzhifufvs1# + #kongzhifuzwj#",
                  "rules": [
                      {
                          "ruleno": "①",
                          "ruleindex": "MDS21",
                          "isexcluderule": "0",
                          "ismscmodel": "0",
                          "rulevalue": " (1833) +  #mengguwenyuanyin# + #feimengguwenzifu#",
                          "description_mn_rcn": "   ",
                          "description_zh_rcn": "在字母表里出现",
                          "description_en_rus": "In the head of word.",
                          "rulesample": "  ()    ()     ()      ()       ()        ()      ()      ()  "
                      },
                     {
                         "ruleno": "②",
                         "ruleindex": "MDS22",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1820 / 1821 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "   ()    () "
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MDS23",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1820 / 1821 + 182D + 1820 / 1821 +1828 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "   ()    ()   "
                     },
                     {
                         "ruleno": "④",
                         "ruleindex": "MDS24",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1824 / 1826 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "    ()     ()    "
                     },
                     {
                         "ruleno": "⑤",
                         "ruleindex": "MDS25",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1820 / 1821 + 182C + 1822 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "   ()      ()    "
                     },
                     {
                         "ruleno": "⑥",
                         "ruleindex": "MDS26",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1820 / 1821 + 182D + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "   ()     ()  "
                     },
                     {
                         "ruleno": "⑦",
                         "ruleindex": "MDS27",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1824 / 1826 + 1837 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "    ()     () "
                     },
                     {
                         "ruleno": "⑧",
                         "ruleindex": "MDS28",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1824 / 1826 + 1828 + 1822 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "    ()     ()     "
                     },
                     {
                         "ruleno": "⑨",
                         "ruleindex": "MDS29",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1833) +  1824 / 1826 + 182D + 1820 / 1821 + 1837 + #feimengguwenzifu#",
                         "description_mn_rcn": "         ",
                         "description_zh_rcn": "词后面，在格附加成分的首出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "    ()     ()  "
                     },
                     {
                         "ruleno": "⑽",
                         "ruleindex": "MDS2A",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1833) + #kongzhifufvs1# +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "       ",
                         "description_zh_rcn": "在词首，平头形式出现",
                         "description_en_rus": "In the head of word, it appears in horizontal form.",
                         "rulesample": "()    ()    ()      ()    () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MDZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1833)  ［+ #kongzhifufvs2#］　+ #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MDZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1833) + #mengguwenfuyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   #mengguwenfuyin#    #fujiazifu#   ",
                         "description_zh_rcn": "在词中， #mengguwenfuyin#前面以#fujiazifu#形式出现",
                         "description_en_rus": "In the medial of word, it appears as #fujiazifu# in front of #mengguwenfuyin#.",
                         "rulesample": "()  ()  ()  ()  ()  ()    () "
                     },
                  {
                      "ruleno": "②",
                      "ruleindex": "MDZ12",
                      "isexcluderule": "1",
                      "ismscmodel": "0",
                      "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1833) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                      "description_mn_rcn": "      ",
                      "description_zh_rcn": "在词中，元音前面出现",
                      "description_en_rus": "In the medial of word , it appears in front of vowel.",
                      "rulesample": "() （()）"
                  }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MDZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1833) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MDZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1833) + #mengguwenyuanyin# + #mengguwenzifuchuan# / #feimengguwenzifu#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "在词中，元音前面出现形式",
                         "description_en_rus": "In the medial of word , it appears in front of vowel.",
                         "rulesample": "  ()     ()    ()    () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MDZ22",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1833) + #kongzhifufvs1# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   #mengguwenfuyin#    #fujiazifu#   ",
                         "description_zh_rcn": "在词中， #mengguwenfuyin#前面以#fujiazifu#形式出现",
                         "description_en_rus": "In the medial of word, it appears as #fujiazifu# in front of #mengguwenfuyin#.",
                         "rulesample": "      ()       ()     () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MDM10",
                  "ruleisolate": "#kongzhifuzwj# + (1833)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MDM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1833) ",
                         "description_mn_rcn": "   #fujiazifu#   ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#.",
                         "rulesample": "  ()    ()     ()   ()    ()  "
                     }
                  ]
              },
          {
              "bianxingvalue": "",
              "bianxingno": "2",
              "ruleindex": "MDM20",
              "ruleisolate": "#kongzhifuzwj# + (1833) + #kongzhifufvs1#",
              "rules": [
                 {
                     "ruleno": "①",
                     "ruleindex": "MDM21",
                     "isexcluderule": "1",
                     "ismscmodel": "0",
                     "rulevalue": "#mengguwenzifuchuan# + (1833) + #kongzhifufvs1# ",
                     "description_mn_rcn": "    ",
                     "description_zh_rcn": "词末形式",
                     "description_en_rus": "Final form.",
                     "rulesample": "   ()     ()"
                 }
              ]
          }
          ]
      },
      {
          "charvalue": "",
          "charindex": "21",
          "unicode": "1834",
          "latincode": "q",
          "latinname": "CHA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MQD10",
                "ruleisolate": "(1834)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MQD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1834) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MQS10",
                  "ruleisolate": " (1834) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MQS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1834) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": " ()    ()     ()    ()    ()    ()   ()      ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MQZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1834) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MQZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1834) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现形式",
                         "description_en_rus": "Medial form.",
                         "rulesample": "()    ()    ()    ()    ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MQM10",
                  "ruleisolate": "#kongzhifuzwj# + (1834)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MQM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1834) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": " ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "22",
          "unicode": "1835",
          "latincode": "j",
          "latinname": "JA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MJD10",
                "ruleisolate": "(1835)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MJD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1835) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MJS10",
                  "ruleisolate": " (1835) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MJS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1835) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "     ()    ()    ()    ()     ()    ()     ()  "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MJS20",
                  "ruleisolate": " (1835) +  #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MJS21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1835) +  #kongzhifumvs#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "  ()      "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MJZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1835) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MJZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1835) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现形式",
                         "description_en_rus": "Medial form.",
                         "rulesample": "   ()     ()   ()    ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MJZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1835) + #kongzhifumvs# ",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MJZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1835) +  #kongzhifumvs#",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": " ()    ()     () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MJM10",
                  "ruleisolate": "#kongzhifuzwj# + (1835)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MJM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1835) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "    ()   () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "23",
          "unicode": "1836",
          "latincode": "y",
          "latinname": "YA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MYD10",
                "ruleisolate": "(1836)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MYD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1836) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            },
            {
                "bianxingvalue": "",
                "bianxingno": "2",
                "ruleindex": "MYD20",
                "ruleisolate": "(1836) + #kongzhifufvs1#",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MYD21",
                       "isexcluderule": "1",
                       "ismscmodel": "0",
                       "rulevalue": " (1836) + #kongzhifufvs1# ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MYS10",
                  "ruleisolate": " (1836) ［+#kongzhifufvs2#］　+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1836) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()   ()   ()  ()  ()   "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MYS12",
                        "isexcluderule": "1",
                        "ismscmodel": "0",
                        "rulevalue": " (1836) + #kongzhifufvs2# +  #mengguwenzifuchuan#",
                        "description_mn_rcn": "     ",
                        "description_zh_rcn": "词首形式",
                        "description_en_rus": "Initial Form",
                        "rulesample": "  ()（()）"
                    }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MYS20",
                  "ruleisolate": " (1836) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYS21",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1836) + 1822  +  1828 + #feimengguwenzifu#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "   ()     "
                     },
                     {
                         "ruleno": "①",
                         "ruleindex": "MYS22",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + (1836) + 1822  + #feimengguwenzifu#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "词后面以格附加成分的形式出现",
                         "description_en_rus": "It appears as a case suffix behind the word",
                         "rulesample": "   () "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MYS23",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": " (1836) + #kongzhifufvs1# +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "() （()）   () （()）      "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MYZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1836) ［+ #kongzhifufvs3#］　+  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1836) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word",
                         "rulesample": "()    ()   ()     ()      ()    ()  ()  ()    ()   ()    ()    ()    "
                     },                    
                     {
                         "ruleno": "②",
                         "ruleindex": "MYZ12",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "  #mengguwenzifuchuan#  /  #kongzhifuzwj# + (1836) + #kongzhifufvs3#+  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "      ",
                         "description_zh_rcn": "在词中，以格附加成分的形式出现",
                         "description_en_rus": "In the medial of word, it appears as suffix.",
                         "rulesample": "   ()       ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MYZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1836) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + 1822 + (1836) +  1820 / 1821 + 1837 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "In the medial of word, it appears as suffix.",
                         "rulesample": "   ()    "
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "MYZ22",
                         "isexcluderule": "0",
                         "ismscmodel": "1",
                         "rulevalue": "#kongzhifu202f#  + 1822 + (1836) +  1820 / 1821 + 1828 + #feimengguwenzifu#",
                         "description_mn_rcn": "  ",
                         "description_zh_rcn": "格附加成分里",
                         "description_en_rus": "In the medial of word, it appears as suffix.",
                         "rulesample": "       ()"
                     },
                     {
                         "ruleno": "③",
                         "ruleindex": "MYZ23",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# +  (1836) + #kongzhifufvs1# + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    （    ）",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word",
                         "rulesample": "()   ()    ()     ()      ()      () （() ）     () （() ）       ()（()） "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "MYZ30",
                  "ruleisolate": "#kongzhifuzwj# + (1836) + #kongzhifufvs2# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYZ31",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1836) + #kongzhifufvs2# +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    （   ）",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "In the medial of word",
                         "rulesample": "()     ()      ()     ()     () （        ）   ()      ()       ()     () （() ）     () （()）     () （()）     () （() ）     ()（()） "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "4",
                  "ruleindex": "MYZ40",
                  "ruleisolate": "#kongzhifuzwj# + (1836) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYZ41",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " #mengguwenzifuchuan#  /  #kongzhifuzwj# + (1836) +  #kongzhifumvs#",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": " ()       ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MYM10",
                  "ruleisolate": "#kongzhifuzwj# + (1836)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MYM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1836) ",
                         "description_mn_rcn": "    #fujiazifu#  ",
                         "description_zh_rcn": "词末#fujiazifu#形式出现",
                         "description_en_rus": "In the end of word, it appears as #fujiazifu#.",
                         "rulesample": "  ()   ()   ()   ()   ()       "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "24",
          "unicode": "1837",
          "latincode": "r",
          "latinname": "RA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MRD10",
                "ruleisolate": "(1837)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MRD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1837) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MRS10",
                  "ruleisolate": " (1837) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MRS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1837) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()  ()   ()  ()   ()   ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MRZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1837) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MRZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1837) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中形式",
                         "description_en_rus": "Medial form",
                         "rulesample": "()    ()      ()    ()   ()    "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "MRZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1837) + #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MRZ21",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1837) +  #kongzhifumvs# ",
                         "description_mn_rcn": "           ",
                         "description_zh_rcn": "在词中，[   ]元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ]",
                         "rulesample": "  ()   ()   ()   () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MRM10",
                  "ruleisolate": "#kongzhifuzwj# + (1837)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MRM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1837) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "    ()   ()  ()    ()   ()    ()        "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "25",
          "unicode": "1838",
          "latincode": "W",
          "latinname": "WA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XWD10",
                "ruleisolate": "(1838)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XWD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1838) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XWS10",
                  "ruleisolate": " (1838) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XWS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1838) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()       ()      ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XWZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1838) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XWZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1838) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    （    ）",
                         "description_zh_rcn": "在词中形式",
                         "description_en_rus": "It appears in the medial of word ",
                         "rulesample": "()     ()    ()   ()            ()"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "XWZ20",
                  "ruleisolate": "#kongzhifuzwj# + (1838) + #kongzhifufvs1# +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XWZ21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1838)  + #kongzhifufvs1#+ #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "    （    ）",
                         "description_zh_rcn": "在词中形式",
                         "description_en_rus": "It appears in the medial of word ",
                         "rulesample": "()（()）                 () （()）"
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "3",
                  "ruleindex": "XWZ30",
                  "ruleisolate": "#kongzhifuzwj# + (1838)  +  ［+ #kongzhifufvs1#］+  #kongzhifumvs#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XWZ31",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1838) +  #kongzhifumvs# ",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": "()     ()"
                     },
                     {
                         "ruleno": "②",
                         "ruleindex": "XWZ32",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1838) + #kongzhifufvs1# + #kongzhifumvs# ",
                         "description_mn_rcn": "            ",
                         "description_zh_rcn": "在词中，[   ] 元音前分开写",
                         "description_en_rus": "In the medial of word, it is written separately in front of vowel [   ] ",
                         "rulesample": "()     ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XWM10",
                  "ruleisolate": "#kongzhifuzwj# + (1838)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XWM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1838) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "  ()    ()   "
                     }
                  ]
              },
              {
                  "bianxingvalue": "",
                  "bianxingno": "2",
                  "ruleindex": "XWM20",
                  "ruleisolate": "#kongzhifuzwj# + (1838) + #kongzhifufvs1#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XWM21",
                         "isexcluderule": "1",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1838) + #kongzhifufvs1# ",
                         "description_mn_rcn": "   #fujiazifu#  ",
                         "description_zh_rcn": "词末以#fujiazifu#形式出现",
                         "description_en_rus": "in the end of word,It appears as a #fujiazifu#",
                         "rulesample": "  ()   ()   ()    ()   "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "26",
          "unicode": "1839",
          "latincode": "f",
          "latinname": "FA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XFD10",
                "ruleisolate": "(1839)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XFD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1839) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XFS10",
                  "ruleisolate": " (1839) + #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XFS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1839) + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()   ()     ()   ()  "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XFZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1839) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XFZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1839) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "Medial form",
                         "rulesample": "()    ()   ()  () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XFM10",
                  "ruleisolate": "#kongzhifuzwj# + (1839)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XFM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1839) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "27",
          "unicode": "183A",
          "latincode": "k",
          "latinname": "KA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MKD10",
                "ruleisolate": "(183A)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MKD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (183A) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MKS10",
                  "ruleisolate": " (183A) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MKS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (183A) +  #mengguwenzifuchuan# ",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()     ()     ()   ()   ()    () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MKZ10",
                  "ruleisolate": "#kongzhifuzwj# + (183A) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MKZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (183A) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "Medial form",
                         "rulesample": "()       ()    ()  ()    ()  ()  "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MKM10",
                  "ruleisolate": "#kongzhifuzwj# + (183A)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MKM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (183A) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form",
                         "rulesample": "()   () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "28",
          "unicode": "183B",
          "latincode": "K",
          "latinname": "KHA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XKD10",
                "ruleisolate": "(183B)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XKD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (183B) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XKS10",
                  "ruleisolate": " (183B) + #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XKS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (183B) + #mengguwenzifuchuan# ",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()   ()     ()   ()   ()    ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XKZ10",
                  "ruleisolate": "#kongzhifuzwj# + (183B) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XKZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (183B) + #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "在词中出现",
                         "description_en_rus": "Medial form",
                         "rulesample": "()        ()    ()  ()    ()  () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XKM10",
                  "ruleisolate": "#kongzhifuzwj# + (183B)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XKM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (183B) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form",
                         "rulesample": "()   ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "29",
          "unicode": "183C",
          "latincode": "c",
          "latinname": "TSA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XCD10",
                "ruleisolate": "(183C)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XCD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (183C) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XCS10",
                  "ruleisolate": " (183C) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XCS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (183C) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()     ()      ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XCZ10",
                  "ruleisolate": "#kongzhifuzwj# + (183C) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XCZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (183C) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "  ()        ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XCM10",
                  "ruleisolate": "#kongzhifuzwj# + (183C)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XCM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (183C) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "  ()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "30",
          "unicode": "183D",
          "latincode": "z",
          "latinname": "ZA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "MZD10",
                "ruleisolate": "(183D)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "MZD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (183D) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MZS10",
                  "ruleisolate": " (183D) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MZS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (183D) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()     ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MZZ10",
                  "ruleisolate": "#kongzhifuzwj# + (183D) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MZZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (183D) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "()  () "
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "MZM10",
                  "ruleisolate": "#kongzhifuzwj# + (183D)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "MZM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (183D) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()   () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "31",
          "unicode": "183E",
          "latincode": "H",
          "latinname": "HAA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XHD10",
                "ruleisolate": "(183E)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XHD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (183E) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XHS10",
                  "ruleisolate": " (183E) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XHS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (183E) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "  ()    ()  () "
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XHZ10",
                  "ruleisolate": "#kongzhifuzwj# + (183E) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XHZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (183E) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": " ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XHM10",
                  "ruleisolate": "#kongzhifuzwj# + (183E)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XHM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (183E) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "  ()    () "
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "32",
          "unicode": "183F",
          "latincode": "R",
          "latinname": "ZRA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XRD10",
                "ruleisolate": "(183F)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XRD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (183F) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XRS10",
                  "ruleisolate": " (183F) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XRS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (183F) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XRZ10",
                  "ruleisolate": "#kongzhifuzwj# + (183F) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XRZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (183F) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "  ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XRM10",
                  "ruleisolate": "#kongzhifuzwj# + (183F)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XRM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (183F) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "33",
          "unicode": "1840",
          "latincode": "L",
          "latinname": "LHA",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XLD10",
                "ruleisolate": "(1840)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XLD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1840) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XLS10",
                  "ruleisolate": "(1840) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XLS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1840) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()     ()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XLZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1840) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XLZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1840) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "()      ()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XLM10",
                  "ruleisolate": "#kongzhifuzwj# + (1840)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XLM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1840) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "34",
          "unicode": "1841",
          "latincode": "Z",
          "latinname": "ZHI",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XZD10",
                "ruleisolate": "(1841)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XZD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1841) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XZS10",
                  "ruleisolate": " (1841) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XZS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1841) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XZZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1841) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XZZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1841) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "() virginia"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XZM10",
                  "ruleisolate": "#kongzhifuzwj# + (1841)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XZM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1841) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "35",
          "unicode": "1842",
          "latincode": "C",
          "latinname": "CHI",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XQD10",
                "ruleisolate": "(1842)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XQD11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (1842) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XQS10",
                  "ruleisolate": "(1842) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XQS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (1842) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XQZ10",
                  "ruleisolate": "#kongzhifuzwj# + (1842) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XQZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (1842) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XQM10",
                  "ruleisolate": "#kongzhifuzwj# + (1842)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XQM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan# + (1842) ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      },
      {
          "charvalue": "",
          "charindex": "36",
          "unicode": "180A",
          "latincode": "I",
          "latinname": "NIRUGU",
          "state": "1",
          "isolate": [
            {
                "bianxingvalue": "",
                "bianxingno": "1",
                "ruleindex": "XID10",
                "ruleisolate": "(180A)",
                "rules": [
                   {
                       "ruleno": "①",
                       "ruleindex": "XID11",
                       "isexcluderule": "0",
                       "ismscmodel": "0",
                       "rulevalue": " (180A) ",
                       "description_mn_rcn": " ",
                       "description_zh_rcn": "独立式",
                       "description_en_rus": "Isolate Form",
                       "rulesample": "()"
                   }
                ]
            }
          ],
          "initial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XIS10",
                  "ruleisolate": " (180A) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XIS11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": " (180A) +  #mengguwenzifuchuan#",
                         "description_mn_rcn": "     ",
                         "description_zh_rcn": "词首形式",
                         "description_en_rus": "Initial Form",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "medial": [
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XIZ10",
                  "ruleisolate": "#kongzhifuzwj# + (180A) +  #kongzhifuzwj#",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XIZ11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#  /  #kongzhifuzwj# + (180A) +  #mengguwenzifuchuan#  /  #kongzhifuzwj#",
                         "description_mn_rcn": "   ",
                         "description_zh_rcn": "词中出现字形",
                         "description_en_rus": "Medial form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ],
          "final": [ 
              {
                  "bianxingvalue": "",
                  "bianxingno": "1",
                  "ruleindex": "XIM10",
                  "ruleisolate": "#kongzhifuzwj# + (180A)",
                  "rules": [
                     {
                         "ruleno": "①",
                         "ruleindex": "XIM11",
                         "isexcluderule": "0",
                         "ismscmodel": "0",
                         "rulevalue": "#mengguwenzifuchuan#+ (180A)  ",
                         "description_mn_rcn": "    ",
                         "description_zh_rcn": "词末形式",
                         "description_en_rus": "Final form.",
                         "rulesample": "()"
                     }
                  ]
              }
          ]
      }
    ]
};
