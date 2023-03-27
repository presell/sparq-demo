// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: 64ZpwqOyFQc

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
import sty from "./PlasmicNavBar1440Px.module.css"; // plasmic-import: 64ZpwqOyFQc/css

import Frame5Icon from "./icons/PlasmicIcon__Frame5"; // plasmic-import: 494FH_2mOp-/icon

export type PlasmicNavBar1440Px__VariantMembers = {};
export type PlasmicNavBar1440Px__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavBar1440Px__VariantsArgs;
export const PlasmicNavBar1440Px__VariantProps = new Array<VariantPropType>();

export type PlasmicNavBar1440Px__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar1440Px__ArgsType;
export const PlasmicNavBar1440Px__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar1440Px__OverridesType = {
  header2?: p.Flex<"div">;
  div149?: p.Flex<"div">;
  sparqLogo125Xpng2?: p.Flex<"a"> & Partial<LinkProps>;
  ulSiteNav?: p.Flex<"div">;
  a7?: p.Flex<"div">;
  div150?: p.Flex<"div">;
  ul6?: p.Flex<"div">;
  login?: p.Flex<"a"> & Partial<LinkProps>;
  signUp?: p.Flex<"a"> & Partial<LinkProps>;
  a8?: p.Flex<"a"> & Partial<LinkProps>;
  svg7?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavBar1440PxProps {
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

function PlasmicNavBar1440Px__RenderFunc(props: {
  variants: PlasmicNavBar1440Px__VariantsArgs;
  args: PlasmicNavBar1440Px__ArgsType;
  overrides: PlasmicNavBar1440Px__OverridesType;
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
      data-plasmic-name={"header2"}
      data-plasmic-override={overrides.header2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.header2
      )}
    >
      <div
        data-plasmic-name={"div149"}
        data-plasmic-override={overrides.div149}
        className={classNames(projectcss.all, sty.div149)}
      >
        <p.PlasmicLink
          data-plasmic-name={"sparqLogo125Xpng2"}
          data-plasmic-override={overrides.sparqLogo125Xpng2}
          className={classNames(
            projectcss.all,
            projectcss.a,
            sty.sparqLogo125Xpng2
          )}
          component={Link}
          href={"https://shop.lifehacksplus.com/discount/QUIT15" as const}
          platform={"nextjs"}
        />

        <div
          data-plasmic-name={"ulSiteNav"}
          data-plasmic-override={overrides.ulSiteNav}
          className={classNames(projectcss.all, sty.ulSiteNav)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__qhVMh
            )}
            component={Link}
            href={"https://www.sparqlife.com/collections/rechargeable" as const}
            platform={"nextjs"}
          >
            {"Rechargeable"}
          </p.PlasmicLink>
          <div
            data-plasmic-name={"a7"}
            data-plasmic-override={overrides.a7}
            className={classNames(projectcss.all, sty.a7)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__kESv
              )}
              component={Link}
              href={"https://www.sparqlife.com/collections/all" as const}
              platform={"nextjs"}
            >
              {"Disposable"}
            </p.PlasmicLink>
          </div>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___2SKl
            )}
            component={Link}
            href={
              "https://www.sparqlife.com/collections/volume-buying" as const
            }
            platform={"nextjs"}
          >
            {"Bulk Buying"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__g0YWv
            )}
            component={Link}
            href={"https://www.sparqlife.com/pages/pod-subscription" as const}
            platform={"nextjs"}
          >
            {"Auto-Ship"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___6YyEo
            )}
            component={Link}
            href={"https://www.sparqlife.com/pages/our-story" as const}
            platform={"nextjs"}
          >
            {"About"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__btVhh
            )}
            component={Link}
            href={
              "https://www.sparqlife.com/pages/loyalty-referral-program" as const
            }
            platform={"nextjs"}
          >
            {"Rewards"}
          </p.PlasmicLink>
        </div>
        <div
          data-plasmic-name={"div150"}
          data-plasmic-override={overrides.div150}
          className={classNames(projectcss.all, sty.div150)}
        >
          <div
            data-plasmic-name={"ul6"}
            data-plasmic-override={overrides.ul6}
            className={classNames(projectcss.all, sty.ul6)}
          >
            <p.PlasmicLink
              data-plasmic-name={"login"}
              data-plasmic-override={overrides.login}
              className={classNames(projectcss.all, projectcss.a, sty.login)}
              component={Link}
              href={"https://www.sparqlife.com/account/login" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cn0QP
                )}
              >
                {"Login"}
              </div>
            </p.PlasmicLink>
            <p.PlasmicLink
              data-plasmic-name={"signUp"}
              data-plasmic-override={overrides.signUp}
              className={classNames(projectcss.all, projectcss.a, sty.signUp)}
              component={Link}
              href={"https://www.sparqlife.com/account/register" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z0Ngj
                )}
              >
                {"Sign Up"}
              </div>
            </p.PlasmicLink>
            <p.PlasmicLink
              data-plasmic-name={"a8"}
              data-plasmic-override={overrides.a8}
              className={classNames(projectcss.all, projectcss.a, sty.a8)}
              component={Link}
              href={"https://www.sparqlife.com/cart" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uepLx
                )}
              >
                {"Cart"}
              </div>
              <div
                data-plasmic-name={"svg7"}
                data-plasmic-override={overrides.svg7}
                className={classNames(projectcss.all, sty.svg7)}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <Frame5Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                ) : null}
              </div>
            </p.PlasmicLink>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  header2: [
    "header2",
    "div149",
    "sparqLogo125Xpng2",
    "ulSiteNav",
    "a7",
    "div150",
    "ul6",
    "login",
    "signUp",
    "a8",
    "svg7",
    "svg"
  ],
  div149: [
    "div149",
    "sparqLogo125Xpng2",
    "ulSiteNav",
    "a7",
    "div150",
    "ul6",
    "login",
    "signUp",
    "a8",
    "svg7",
    "svg"
  ],
  sparqLogo125Xpng2: ["sparqLogo125Xpng2"],
  ulSiteNav: ["ulSiteNav", "a7"],
  a7: ["a7"],
  div150: ["div150", "ul6", "login", "signUp", "a8", "svg7", "svg"],
  ul6: ["ul6", "login", "signUp", "a8", "svg7", "svg"],
  login: ["login"],
  signUp: ["signUp"],
  a8: ["a8", "svg7", "svg"],
  svg7: ["svg7", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  header2: "div";
  div149: "div";
  sparqLogo125Xpng2: "a";
  ulSiteNav: "div";
  a7: "div";
  div150: "div";
  ul6: "div";
  login: "a";
  signUp: "a";
  a8: "a";
  svg7: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar1440Px__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar1440Px__VariantsArgs;
    args?: PlasmicNavBar1440Px__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar1440Px__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBar1440Px__ArgsType,
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
          internalArgPropNames: PlasmicNavBar1440Px__ArgProps,
          internalVariantPropNames: PlasmicNavBar1440Px__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar1440Px__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header2") {
    func.displayName = "PlasmicNavBar1440Px";
  } else {
    func.displayName = `PlasmicNavBar1440Px.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar1440Px = Object.assign(
  // Top-level PlasmicNavBar1440Px renders the root element
  makeNodeComponent("header2"),
  {
    // Helper components rendering sub-elements
    div149: makeNodeComponent("div149"),
    sparqLogo125Xpng2: makeNodeComponent("sparqLogo125Xpng2"),
    ulSiteNav: makeNodeComponent("ulSiteNav"),
    a7: makeNodeComponent("a7"),
    div150: makeNodeComponent("div150"),
    ul6: makeNodeComponent("ul6"),
    login: makeNodeComponent("login"),
    signUp: makeNodeComponent("signUp"),
    a8: makeNodeComponent("a8"),
    svg7: makeNodeComponent("svg7"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavBar1440Px
    internalVariantProps: PlasmicNavBar1440Px__VariantProps,
    internalArgProps: PlasmicNavBar1440Px__ArgProps
  }
);

export default PlasmicNavBar1440Px;
/* prettier-ignore-end */
