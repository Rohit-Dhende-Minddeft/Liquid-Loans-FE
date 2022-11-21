import DarkBG from "../public/images/body-bg.jpg";
import LightBG from "../public/images/body-bg-w.jpg";

import DetailDarkBG from "../public/images/detail-bg-w.jpg";

export const theme = (isDarkTheme) => {
  return {
    // text colors
    color01: isDarkTheme ? "#b19090" : "#575757",
    DownldBTNC: isDarkTheme ? "#475099" : "#475099",

    // background colors
    BodyBg: isDarkTheme ? DarkBG.src : LightBG.src,
    BodyBg02: isDarkTheme ? DetailDarkBG.src : DetailDarkBG.src,
    BodyColor: isDarkTheme ? "#180928" : "#ffffff",
    PodcstBg02: isDarkTheme ? "#0f041a" : "#0f041a",
    ValidatBOR: isDarkTheme ? "#290C4F" : "#D1C4BC",
    ThemeChangerBg: isDarkTheme ? "#30144c" : "#e6d1c9",
    ThemechangerBorder: isDarkTheme ? "#1b1b22" : "#fff",
    ThemeChangerShadow: isDarkTheme ? "rgb(0 0 0 / 30%)" : "rgb(0 0 0 / 20%)",
    PopupBG001: isDarkTheme ? " rgba(41,12,79,0.8)" : " rgba(238,226,222,0.8)",
    PopupBG002: isDarkTheme ? "#1a0633" : "#C6B9B2",
    SubCColor01: isDarkTheme ? "#180928" : "#fff",
    LanDDBG: isDarkTheme ? "rgba(255,255,255,0.15)" : "rgba(248,239,235,1)",
    Moon: isDarkTheme ? "#894abf" : "#894abf",
    TextWhite: isDarkTheme ? "#ffffff" : "#000000",
    TextBlack: isDarkTheme ? "#000" : "#ffffff",
    TextMilkWhite: isDarkTheme ? "#f5f6f7" : "#000000",
    TextPurple: isDarkTheme ? "#75618c" : "#75618c",
    GColor1: isDarkTheme ? "#733bad" : "#733bad",
    GColor2: isDarkTheme ? "#4f00cf" : "#4f00cf",
    GColorV2: isDarkTheme ? "#984DEA" : "#984DEA",
    GColor3: isDarkTheme ? "#ea8615" : "#ea8615",
    GColor4: isDarkTheme ? "#f6ad39" : "#f6ad39",
    GColor1Light: isDarkTheme
      ? "rgb(115 59 173 / 40%)"
      : "rgb(115 59 173 / 40%)",
    GColor2Light: isDarkTheme ? "rgb(79 0 207 / 40%)" : "rgb(79 0 207 / 40%)",
    GColor1Medium: isDarkTheme
      ? "rgb(115 59 173 / 80%)"
      : "rgb(115 59 173 / 80%)",
    GColor2Medium: isDarkTheme ? "rgb(79 0 207 / 80%)" : "rgb(79 0 207 / 80%)",
    GColor1LightW: isDarkTheme
      ? "rgb(115 59 173 / 40%)"
      : "rgb(214 184 174 / 40%)",
    GColor2LightW: isDarkTheme
      ? "rgb(79 0 207 / 40%)"
      : "rgb(187 131 112 / 40%)",
    DGColor1: isDarkTheme ? "rgb(114,58,171,0.9)" : "rgb(168,99,237,0.9)",
    DGColor2: isDarkTheme ? "rgb(24,9,40,1)" : "rgb(255,255,255,1)",
    MenuColor: isDarkTheme ? "#8a86a0" : "#482a2a",
    Menuhover: isDarkTheme ? "#ada5d9" : "#ada5d9",
    Footerbg: isDarkTheme ? "#1f112f" : "#f9f9f9",
    FooterBorder: isDarkTheme ? "#362944" : "#e0e0e0",
    FooterLink: isDarkTheme ? "#aa8dcc" : "#2d2d2d",
    FooterLinkHover: isDarkTheme ? "#cbaaf3" : "#75618c",
    LGreyText: isDarkTheme ? "#dddddd" : "#dddddd",
    InputBg: isDarkTheme ? "#2a1d39" : "#fff",
    InputBorder: isDarkTheme ? "#3a3342" : "#cbc9cd",
    TermLink: isDarkTheme ? "#a393b7" : "#2d2d2d",
    MDDText: isDarkTheme ? "#646464" : "#646464",
    PDCText: isDarkTheme ? "#bababa" : "#000",
    MenuBoxShadow: isDarkTheme ? "rgb(15 15 15 / 52%)" : "rgb(15 15 15 / 52%)",
    TransBg: isDarkTheme ? "rgb(255 255 255 / 10%)" : "rgb(114 58 174 / 22%)",
    TransBorder: isDarkTheme
      ? "rgb(255 255 255 / 20%)"
      : "rgb(163 120 209 / 50%)",
    TransBorder2: isDarkTheme
      ? "rgb(255 255 255 / 17%)"
      : "rgb(255 255 255 / 17%)",
    DappBShadow: isDarkTheme ? "rgb(0 0 0 / 40%)" : "rgb(0 0 0 / 40%)",
    BG1Shadow: isDarkTheme ? "rgb(15 15 15 / 22%)" : "rgb(15 15 15 / 22%)",
    FBorderRight: isDarkTheme ? "#463a53" : "#d8d5db",
    Rcolor1: isDarkTheme ? "#3D116A" : "#3D116A",
    Rcolor2: isDarkTheme ? "#723AAE" : "#723AAE",
    Rcolor3: isDarkTheme ? "#5002CE" : "#5002CE",
    Rcolor4: isDarkTheme ? "#32037D" : "#32037D",
    WhiteShadow: isDarkTheme
      ? "rgb(255 255 255 / 16%)"
      : "rgb(255 255 255 / 16%)",
    TextMilkWhiteLight: isDarkTheme
      ? "rgb(245 246 247 / 30%)"
      : "rgb(245 246 247 / 30%)",
    CColor1: isDarkTheme ? "#1da1f1" : "#1da1f1",
    CColor2: isDarkTheme ? "#3b5998" : "#3b5998",
    CColor3: isDarkTheme ? "#531afe" : "#531afe",
    CColor4: isDarkTheme ? "#3b9851" : "#3b9851",
    CColor5: isDarkTheme ? "#1ad6fe" : "#1ad6fe",
    CColor6: isDarkTheme ? "#8c5fba" : "#8c5fba",
    CBshadow: isDarkTheme ? "rgb(1 1 1 / 50%)" : "rgb(1 1 1 / 50%)",
    HeadBG: isDarkTheme ? "#160925" : "#fff",
    Headshadow: isDarkTheme ? "rgba(118,70,255,0.08)" : "rgba(118,70,255,0.08)",
    Overlay: isDarkTheme ? "rgb(0 0 0 / 20%)" : "rgb(0 0 0 / 20%)",
    TabColor: isDarkTheme ? "rgb(114 58 174 / 20%)" : "rgb(114 58 174 / 20%)",
    BoxShadow3: isDarkTheme ? "rgb(0 0 0 / 56%)" : "rgb(0 0 0 / 56%)",
    SOoverlay: isDarkTheme ? "rgb(0 0 0 / 70%)" : "rgb(0 0 0 / 70%)",
    FaqTborder: isDarkTheme ? "#475099" : "#475099",
    FaqTborder2: isDarkTheme ? "#34184f" : "#34184f",
    FaqText: isDarkTheme ? "#c3bace" : "#2d2d2d",
    FaqTLink: isDarkTheme ? "#ff1eff" : "#ff1eff",
    Aptext: isDarkTheme ? "#b079fe" : "#b079fe",
    Logoborder: isDarkTheme ? "#3d314b" : "#3d314b",
    MMcolor: isDarkTheme ? "#847198" : "#847198",
    LeadTitle: isDarkTheme ? "#9668ca" : "#9668ca",
    LeadDesc: isDarkTheme ? "#cabce1" : "#333333",
    LinkBg: isDarkTheme ? "#4a6382" : "#4a6382",
    MTitle: isDarkTheme ? "#181616" : "#181616",
    trackColor: isDarkTheme ? "#eeeeee" : "#eeeeee",
    thumbColor: isDarkTheme ? "#6e32b2" : "#6e32b2",
    gboxC01: isDarkTheme ? "#1d0446" : "#decff6",
    ProtoBC01: isDarkTheme ? "#3c147d" : "#3c147d",
    DownlBXBG: isDarkTheme ? "#200e34" : "#fbf5f3",
    DownlTitletext: isDarkTheme ? "#9165bf" : "#9165bf",
    DefiBordr01: isDarkTheme ? "#30223e" : "#30223e",
    DefitxtColor01: isDarkTheme ? "#914ff9" : "#914ff9",
    GColor3Light: isDarkTheme
      ? "rgb(79 0 207 / 80%)"
      : "rgb(214 184 174 / 40%)",
    GColor4Light: isDarkTheme
      ? "rgb(34 10 59 / 100%)"
      : "rgb(187 131 112 / 40%)",
    CasStdyBG01: isDarkTheme ? "#301948" : "#EEE2DE",
    AdBXBG: isDarkTheme ? "#200e34" : "#fbf5f3",
    AdBXBOR: isDarkTheme ? "#411e72" : "#d5c0b9",
    AdBXBORACT: isDarkTheme ? "#482170" : "#d5c0b9",
    ImgFilter: isDarkTheme ? "1" : "0",
    PlayerBg: isDarkTheme
      ? "linear-gradient(to right, #733bad, #733bad)"
      : "linear-gradient(to right, #894abf, #894abf)",
    VolumeBg: isDarkTheme
      ? "linear-gradient(to right, #ec8d1b, #ec8d1b)"
      : "linear-gradient(to right, #733bad, #4f00cf)",
    VolumeThumb: isDarkTheme ? "#ec8d1b" : "#4f00cf",
    VolumeTrackBg: isDarkTheme ? "#5e5369" : "#fff",
    CPerle: isDarkTheme ? "#fb0af7" : "#fb0af7",
    COrange: isDarkTheme ? "#fbebac" : "#ffa825",

    BHbxColor: isDarkTheme ? "#fff" : "#fff",
  };
};
