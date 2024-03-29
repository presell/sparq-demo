// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: QQgWWSGvIfi

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsbai21PvFaWEr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BAI21pvFA_wEr/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparq_master_app.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./Plasmic_320PxFooter.module.css"; // plasmic-import: QQgWWSGvIfi/css

import FrameIcon from "./icons/PlasmicIcon__Frame"; // plasmic-import: 1ey0emVXvWi/icon
import Frame2Icon from "./icons/PlasmicIcon__Frame2"; // plasmic-import: 4fUwQREtlqP/icon
import Frame3Icon from "./icons/PlasmicIcon__Frame3"; // plasmic-import: WAbd2teI-QF/icon

export type Plasmic_320PxFooter__VariantMembers = {};
export type Plasmic_320PxFooter__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxFooter__VariantsArgs;
export const Plasmic_320PxFooter__VariantProps = new Array<VariantPropType>();

export type Plasmic_320PxFooter__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxFooter__ArgsType;
export const Plasmic_320PxFooter__ArgProps = new Array<ArgPropType>();

export type Plasmic_320PxFooter__OverridesType = {
  div216?: p.Flex<"div">;
  footerLogopng3?: p.Flex<"a"> & Partial<LinkProps>;
  div217?: p.Flex<"div">;
  div218?: p.Flex<"div">;
  div219?: p.Flex<"div">;
  company3?: p.Flex<"div">;
  ul11?: p.Flex<"div">;
  about3?: p.Flex<"div">;
  press3?: p.Flex<"div">;
  howItWorks3?: p.Flex<"div">;
  contact3?: p.Flex<"div">;
  brandAmbassador3?: p.Flex<"div">;
  becomeASeller3?: p.Flex<"div">;
  philosophy3?: p.Flex<"div">;
  philanthropy3?: p.Flex<"div">;
  helpFaQs3?: p.Flex<"div">;
  div220?: p.Flex<"div">;
  products3?: p.Flex<"div">;
  ul12?: p.Flex<"div">;
  rechargeable3?: p.Flex<"div">;
  disposable3?: p.Flex<"div">;
  giftCards3?: p.Flex<"div">;
  div221?: p.Flex<"div">;
  legal3?: p.Flex<"div">;
  ul13?: p.Flex<"div">;
  termsOfUse3?: p.Flex<"div">;
  privacyPolicy3?: p.Flex<"div">;
  shipping3?: p.Flex<"div">;
  returnPolicy3?: p.Flex<"div">;
  warranty3?: p.Flex<"div">;
  div222?: p.Flex<"div">;
  div223?: p.Flex<"div">;
  followUs3?: p.Flex<"div">;
  ul14?: p.Flex<"div">;
  svg13?: p.Flex<"div">;
  svg14?: p.Flex<"div">;
  svg15?: p.Flex<"div">;
  shopifySecureBadgeLightShadowpng3?: p.Flex<"div">;
};

export interface Default_320PxFooterProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_320PxFooter__RenderFunc(props: {
  variants: Plasmic_320PxFooter__VariantsArgs;
  args: Plasmic_320PxFooter__ArgsType;
  overrides: Plasmic_320PxFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbai21PvFaWEr()
  });

  return (
    <div
      data-plasmic-name={"div216"}
      data-plasmic-override={overrides.div216}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div216
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"footerLogopng3"}
        data-plasmic-override={overrides.footerLogopng3}
        className={classNames(projectcss.all, projectcss.a, sty.footerLogopng3)}
        component={Link}
        href={"https://shop.lifehacksplus.com/discount/QUIT15" as const}
        platform={"nextjs"}
      />

      <div
        data-plasmic-name={"div217"}
        data-plasmic-override={overrides.div217}
        className={classNames(projectcss.all, sty.div217)}
      >
        <div
          data-plasmic-name={"div218"}
          data-plasmic-override={overrides.div218}
          className={classNames(projectcss.all, sty.div218)}
        >
          <div
            data-plasmic-name={"div219"}
            data-plasmic-override={overrides.div219}
            className={classNames(projectcss.all, sty.div219)}
          >
            <div
              data-plasmic-name={"company3"}
              data-plasmic-override={overrides.company3}
              className={classNames(projectcss.all, sty.company3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sHUhY
                )}
              >
                {"Company"}
              </div>
            </div>
            <div
              data-plasmic-name={"ul11"}
              data-plasmic-override={overrides.ul11}
              className={classNames(projectcss.all, sty.ul11)}
            >
              <div
                data-plasmic-name={"about3"}
                data-plasmic-override={overrides.about3}
                className={classNames(projectcss.all, sty.about3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__geSRa
                  )}
                >
                  {"About"}
                </div>
              </div>
              <div
                data-plasmic-name={"press3"}
                data-plasmic-override={overrides.press3}
                className={classNames(projectcss.all, sty.press3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__as8Uo
                  )}
                >
                  {"Press"}
                </div>
              </div>
              <div
                data-plasmic-name={"howItWorks3"}
                data-plasmic-override={overrides.howItWorks3}
                className={classNames(projectcss.all, sty.howItWorks3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qOFp9
                  )}
                >
                  {"How it works"}
                </div>
              </div>
              <div
                data-plasmic-name={"contact3"}
                data-plasmic-override={overrides.contact3}
                className={classNames(projectcss.all, sty.contact3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hm6Ci
                  )}
                >
                  {"Contact"}
                </div>
              </div>
              <div
                data-plasmic-name={"brandAmbassador3"}
                data-plasmic-override={overrides.brandAmbassador3}
                className={classNames(projectcss.all, sty.brandAmbassador3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dl0AD
                  )}
                >
                  {"Brand Ambassador"}
                </div>
              </div>
              <div
                data-plasmic-name={"becomeASeller3"}
                data-plasmic-override={overrides.becomeASeller3}
                className={classNames(projectcss.all, sty.becomeASeller3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rOoRe
                  )}
                >
                  {"Become a seller"}
                </div>
              </div>
              <div
                data-plasmic-name={"philosophy3"}
                data-plasmic-override={overrides.philosophy3}
                className={classNames(projectcss.all, sty.philosophy3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yCO
                  )}
                >
                  {"Philosophy"}
                </div>
              </div>
              <div
                data-plasmic-name={"philanthropy3"}
                data-plasmic-override={overrides.philanthropy3}
                className={classNames(projectcss.all, sty.philanthropy3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__u7ZZx
                  )}
                >
                  {"Philanthropy"}
                </div>
              </div>
              <div
                data-plasmic-name={"helpFaQs3"}
                data-plasmic-override={overrides.helpFaQs3}
                className={classNames(projectcss.all, sty.helpFaQs3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aCcum
                  )}
                >
                  {"Help/FAQs"}
                </div>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"div220"}
            data-plasmic-override={overrides.div220}
            className={classNames(projectcss.all, sty.div220)}
          >
            <div
              data-plasmic-name={"products3"}
              data-plasmic-override={overrides.products3}
              className={classNames(projectcss.all, sty.products3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ySmi
                )}
              >
                {"Products"}
              </div>
            </div>
            <div
              data-plasmic-name={"ul12"}
              data-plasmic-override={overrides.ul12}
              className={classNames(projectcss.all, sty.ul12)}
            >
              <div
                data-plasmic-name={"rechargeable3"}
                data-plasmic-override={overrides.rechargeable3}
                className={classNames(projectcss.all, sty.rechargeable3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xc2GA
                  )}
                >
                  {"Rechargeable"}
                </div>
              </div>
              <div
                data-plasmic-name={"disposable3"}
                data-plasmic-override={overrides.disposable3}
                className={classNames(projectcss.all, sty.disposable3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__telf4
                  )}
                >
                  {"Disposable"}
                </div>
              </div>
              <div
                data-plasmic-name={"giftCards3"}
                data-plasmic-override={overrides.giftCards3}
                className={classNames(projectcss.all, sty.giftCards3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x4R1X
                  )}
                >
                  {"Gift Cards"}
                </div>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"div221"}
            data-plasmic-override={overrides.div221}
            className={classNames(projectcss.all, sty.div221)}
          >
            <div
              data-plasmic-name={"legal3"}
              data-plasmic-override={overrides.legal3}
              className={classNames(projectcss.all, sty.legal3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uXrvA
                )}
              >
                {"Legal"}
              </div>
            </div>
            <div
              data-plasmic-name={"ul13"}
              data-plasmic-override={overrides.ul13}
              className={classNames(projectcss.all, sty.ul13)}
            >
              <div
                data-plasmic-name={"termsOfUse3"}
                data-plasmic-override={overrides.termsOfUse3}
                className={classNames(projectcss.all, sty.termsOfUse3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ywMat
                  )}
                >
                  {"Terms of use"}
                </div>
              </div>
              <div
                data-plasmic-name={"privacyPolicy3"}
                data-plasmic-override={overrides.privacyPolicy3}
                className={classNames(projectcss.all, sty.privacyPolicy3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fdMwk
                  )}
                >
                  {"Privacy Policy"}
                </div>
              </div>
              <div
                data-plasmic-name={"shipping3"}
                data-plasmic-override={overrides.shipping3}
                className={classNames(projectcss.all, sty.shipping3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hWvM1
                  )}
                >
                  {"Shipping"}
                </div>
              </div>
              <div
                data-plasmic-name={"returnPolicy3"}
                data-plasmic-override={overrides.returnPolicy3}
                className={classNames(projectcss.all, sty.returnPolicy3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6HRAn
                  )}
                >
                  {"Return Policy"}
                </div>
              </div>
              <div
                data-plasmic-name={"warranty3"}
                data-plasmic-override={overrides.warranty3}
                className={classNames(projectcss.all, sty.warranty3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__whpAh
                  )}
                >
                  {"Warranty"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-plasmic-name={"div222"}
          data-plasmic-override={overrides.div222}
          className={classNames(projectcss.all, sty.div222)}
        >
          <div
            data-plasmic-name={"div223"}
            data-plasmic-override={overrides.div223}
            className={classNames(projectcss.all, sty.div223)}
          >
            <div
              data-plasmic-name={"followUs3"}
              data-plasmic-override={overrides.followUs3}
              className={classNames(projectcss.all, sty.followUs3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rDGt
                )}
              >
                {"Follow US"}
              </div>
            </div>
            <div
              data-plasmic-name={"ul14"}
              data-plasmic-override={overrides.ul14}
              className={classNames(projectcss.all, sty.ul14)}
            >
              <div
                data-plasmic-name={"svg13"}
                data-plasmic-override={overrides.svg13}
                className={classNames(projectcss.all, sty.svg13)}
              >
                {(
                  hasVariant(globalVariants, "screen", "smallestMobile")
                    ? true
                    : true
                ) ? (
                  <FrameIcon
                    className={classNames(projectcss.all, sty.svg___6IRsi)}
                    role={"img"}
                  />
                ) : null}
              </div>
              <div
                data-plasmic-name={"svg14"}
                data-plasmic-override={overrides.svg14}
                className={classNames(projectcss.all, sty.svg14)}
              >
                {(
                  hasVariant(globalVariants, "screen", "smallestMobile")
                    ? true
                    : true
                ) ? (
                  <Frame2Icon
                    className={classNames(projectcss.all, sty.svg__aqza)}
                    role={"img"}
                  />
                ) : null}
              </div>
              <div
                data-plasmic-name={"svg15"}
                data-plasmic-override={overrides.svg15}
                className={classNames(projectcss.all, sty.svg15)}
              >
                {(
                  hasVariant(globalVariants, "screen", "smallestMobile")
                    ? true
                    : true
                ) ? (
                  <Frame3Icon
                    className={classNames(projectcss.all, sty.svg__bkXmc)}
                    role={"img"}
                  />
                ) : null}
              </div>
            </div>
            <div
              data-plasmic-name={"shopifySecureBadgeLightShadowpng3"}
              data-plasmic-override={
                overrides.shopifySecureBadgeLightShadowpng3
              }
              className={classNames(
                projectcss.all,
                sty.shopifySecureBadgeLightShadowpng3
              )}
            />
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div216: [
    "div216",
    "footerLogopng3",
    "div217",
    "div218",
    "div219",
    "company3",
    "ul11",
    "about3",
    "press3",
    "howItWorks3",
    "contact3",
    "brandAmbassador3",
    "becomeASeller3",
    "philosophy3",
    "philanthropy3",
    "helpFaQs3",
    "div220",
    "products3",
    "ul12",
    "rechargeable3",
    "disposable3",
    "giftCards3",
    "div221",
    "legal3",
    "ul13",
    "termsOfUse3",
    "privacyPolicy3",
    "shipping3",
    "returnPolicy3",
    "warranty3",
    "div222",
    "div223",
    "followUs3",
    "ul14",
    "svg13",
    "svg14",
    "svg15",
    "shopifySecureBadgeLightShadowpng3"
  ],
  footerLogopng3: ["footerLogopng3"],
  div217: [
    "div217",
    "div218",
    "div219",
    "company3",
    "ul11",
    "about3",
    "press3",
    "howItWorks3",
    "contact3",
    "brandAmbassador3",
    "becomeASeller3",
    "philosophy3",
    "philanthropy3",
    "helpFaQs3",
    "div220",
    "products3",
    "ul12",
    "rechargeable3",
    "disposable3",
    "giftCards3",
    "div221",
    "legal3",
    "ul13",
    "termsOfUse3",
    "privacyPolicy3",
    "shipping3",
    "returnPolicy3",
    "warranty3",
    "div222",
    "div223",
    "followUs3",
    "ul14",
    "svg13",
    "svg14",
    "svg15",
    "shopifySecureBadgeLightShadowpng3"
  ],
  div218: [
    "div218",
    "div219",
    "company3",
    "ul11",
    "about3",
    "press3",
    "howItWorks3",
    "contact3",
    "brandAmbassador3",
    "becomeASeller3",
    "philosophy3",
    "philanthropy3",
    "helpFaQs3",
    "div220",
    "products3",
    "ul12",
    "rechargeable3",
    "disposable3",
    "giftCards3",
    "div221",
    "legal3",
    "ul13",
    "termsOfUse3",
    "privacyPolicy3",
    "shipping3",
    "returnPolicy3",
    "warranty3"
  ],
  div219: [
    "div219",
    "company3",
    "ul11",
    "about3",
    "press3",
    "howItWorks3",
    "contact3",
    "brandAmbassador3",
    "becomeASeller3",
    "philosophy3",
    "philanthropy3",
    "helpFaQs3"
  ],
  company3: ["company3"],
  ul11: [
    "ul11",
    "about3",
    "press3",
    "howItWorks3",
    "contact3",
    "brandAmbassador3",
    "becomeASeller3",
    "philosophy3",
    "philanthropy3",
    "helpFaQs3"
  ],
  about3: ["about3"],
  press3: ["press3"],
  howItWorks3: ["howItWorks3"],
  contact3: ["contact3"],
  brandAmbassador3: ["brandAmbassador3"],
  becomeASeller3: ["becomeASeller3"],
  philosophy3: ["philosophy3"],
  philanthropy3: ["philanthropy3"],
  helpFaQs3: ["helpFaQs3"],
  div220: [
    "div220",
    "products3",
    "ul12",
    "rechargeable3",
    "disposable3",
    "giftCards3"
  ],
  products3: ["products3"],
  ul12: ["ul12", "rechargeable3", "disposable3", "giftCards3"],
  rechargeable3: ["rechargeable3"],
  disposable3: ["disposable3"],
  giftCards3: ["giftCards3"],
  div221: [
    "div221",
    "legal3",
    "ul13",
    "termsOfUse3",
    "privacyPolicy3",
    "shipping3",
    "returnPolicy3",
    "warranty3"
  ],
  legal3: ["legal3"],
  ul13: [
    "ul13",
    "termsOfUse3",
    "privacyPolicy3",
    "shipping3",
    "returnPolicy3",
    "warranty3"
  ],
  termsOfUse3: ["termsOfUse3"],
  privacyPolicy3: ["privacyPolicy3"],
  shipping3: ["shipping3"],
  returnPolicy3: ["returnPolicy3"],
  warranty3: ["warranty3"],
  div222: [
    "div222",
    "div223",
    "followUs3",
    "ul14",
    "svg13",
    "svg14",
    "svg15",
    "shopifySecureBadgeLightShadowpng3"
  ],
  div223: [
    "div223",
    "followUs3",
    "ul14",
    "svg13",
    "svg14",
    "svg15",
    "shopifySecureBadgeLightShadowpng3"
  ],
  followUs3: ["followUs3"],
  ul14: ["ul14", "svg13", "svg14", "svg15"],
  svg13: ["svg13"],
  svg14: ["svg14"],
  svg15: ["svg15"],
  shopifySecureBadgeLightShadowpng3: ["shopifySecureBadgeLightShadowpng3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div216: "div";
  footerLogopng3: "a";
  div217: "div";
  div218: "div";
  div219: "div";
  company3: "div";
  ul11: "div";
  about3: "div";
  press3: "div";
  howItWorks3: "div";
  contact3: "div";
  brandAmbassador3: "div";
  becomeASeller3: "div";
  philosophy3: "div";
  philanthropy3: "div";
  helpFaQs3: "div";
  div220: "div";
  products3: "div";
  ul12: "div";
  rechargeable3: "div";
  disposable3: "div";
  giftCards3: "div";
  div221: "div";
  legal3: "div";
  ul13: "div";
  termsOfUse3: "div";
  privacyPolicy3: "div";
  shipping3: "div";
  returnPolicy3: "div";
  warranty3: "div";
  div222: "div";
  div223: "div";
  followUs3: "div";
  ul14: "div";
  svg13: "div";
  svg14: "div";
  svg15: "div";
  shopifySecureBadgeLightShadowpng3: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxFooter__VariantsArgs;
    args?: Plasmic_320PxFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: Plasmic_320PxFooter__ArgProps,
          internalVariantPropNames: Plasmic_320PxFooter__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_320PxFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div216") {
    func.displayName = "Plasmic_320PxFooter";
  } else {
    func.displayName = `Plasmic_320PxFooter.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxFooter = Object.assign(
  // Top-level Plasmic_320PxFooter renders the root element
  makeNodeComponent("div216"),
  {
    // Helper components rendering sub-elements
    footerLogopng3: makeNodeComponent("footerLogopng3"),
    div217: makeNodeComponent("div217"),
    div218: makeNodeComponent("div218"),
    div219: makeNodeComponent("div219"),
    company3: makeNodeComponent("company3"),
    ul11: makeNodeComponent("ul11"),
    about3: makeNodeComponent("about3"),
    press3: makeNodeComponent("press3"),
    howItWorks3: makeNodeComponent("howItWorks3"),
    contact3: makeNodeComponent("contact3"),
    brandAmbassador3: makeNodeComponent("brandAmbassador3"),
    becomeASeller3: makeNodeComponent("becomeASeller3"),
    philosophy3: makeNodeComponent("philosophy3"),
    philanthropy3: makeNodeComponent("philanthropy3"),
    helpFaQs3: makeNodeComponent("helpFaQs3"),
    div220: makeNodeComponent("div220"),
    products3: makeNodeComponent("products3"),
    ul12: makeNodeComponent("ul12"),
    rechargeable3: makeNodeComponent("rechargeable3"),
    disposable3: makeNodeComponent("disposable3"),
    giftCards3: makeNodeComponent("giftCards3"),
    div221: makeNodeComponent("div221"),
    legal3: makeNodeComponent("legal3"),
    ul13: makeNodeComponent("ul13"),
    termsOfUse3: makeNodeComponent("termsOfUse3"),
    privacyPolicy3: makeNodeComponent("privacyPolicy3"),
    shipping3: makeNodeComponent("shipping3"),
    returnPolicy3: makeNodeComponent("returnPolicy3"),
    warranty3: makeNodeComponent("warranty3"),
    div222: makeNodeComponent("div222"),
    div223: makeNodeComponent("div223"),
    followUs3: makeNodeComponent("followUs3"),
    ul14: makeNodeComponent("ul14"),
    svg13: makeNodeComponent("svg13"),
    svg14: makeNodeComponent("svg14"),
    svg15: makeNodeComponent("svg15"),
    shopifySecureBadgeLightShadowpng3: makeNodeComponent(
      "shopifySecureBadgeLightShadowpng3"
    ),

    // Metadata about props expected for Plasmic_320PxFooter
    internalVariantProps: Plasmic_320PxFooter__VariantProps,
    internalArgProps: Plasmic_320PxFooter__ArgProps
  }
);

export default Plasmic_320PxFooter;
/* prettier-ignore-end */
