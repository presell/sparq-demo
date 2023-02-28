// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: f2loefW4x-
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import AsFeaturedIn from "../../AsFeaturedIn"; // plasmic-import: AG2XBIi7yI/component

import { useScreenVariants as useScreenVariantsbai21PvFaWEr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BAI21pvFA_wEr/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparq.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./PlasmicNewPage2.module.css"; // plasmic-import: f2loefW4x-/css

export type PlasmicNewPage2__VariantMembers = {};
export type PlasmicNewPage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage2__VariantsArgs;
export const PlasmicNewPage2__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage2__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage2__ArgsType;
export const PlasmicNewPage2__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage2__OverridesType = {
  root?: p.Flex<"div">;
  nav?: p.Flex<"div">;
  headline?: p.Flex<"div">;
  body?: p.Flex<"div">;
  asFeaturedIn?: p.Flex<typeof AsFeaturedIn>;
  reviews?: p.Flex<"div">;
  review1?: p.Flex<"div">;
  review2?: p.Flex<"div">;
  review3?: p.Flex<"div">;
  review4?: p.Flex<"div">;
};

export interface DefaultNewPage2Props {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNewPage2__RenderFunc(props: {
  variants: PlasmicNewPage2__VariantsArgs;
  args: PlasmicNewPage2__ArgsType;
  overrides: PlasmicNewPage2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"nav"}
            data-plasmic-override={overrides.nav}
            className={classNames(projectcss.all, sty.nav)}
          >
            <div className={classNames(projectcss.all, sty.columns__ylSw)}>
              <div className={classNames(projectcss.all, sty.column__dSoH8)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__u4YBa)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sparq/images/logopng.png",
                    fullWidth: 276,
                    fullHeight: 46,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column___9D4Oo)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2W54Q
                  )}
                >
                  {'"The Evolution of Inhalation"'}
                </div>
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"headline"}
            data-plasmic-override={overrides.headline}
            className={classNames(projectcss.all, sty.headline)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cZufs
              )}
            >
              {
                "Want All The Joy Of Inhalation, But None Of The Health Compromises?"
              }
            </div>

            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button__vgvO
              )}
            >
              {"FEEL THE DIFFERENCE 👉"}
            </button>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__b47Bm
              )}
            >
              {"Inhale. Relax. Enjoy Your Daily Vitamin Boost!"}
            </div>

            <div className={classNames(projectcss.all, sty.columns__mNpP)}>
              <div className={classNames(projectcss.all, sty.column__ppHge)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___6QoyX)}
                  displayHeight={"19px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"123px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sparq/images/starpng2.png",
                    fullWidth: 142,
                    fullHeight: 21,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__jdR3X)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__c6H9V
                  )}
                >
                  {"Rated 4.9 Stars By 100,000+ Customers"}
                </div>
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            className={classNames(projectcss.all, sty.body)}
          >
            <AsFeaturedIn
              data-plasmic-name={"asFeaturedIn"}
              data-plasmic-override={overrides.asFeaturedIn}
              className={classNames("__wab_instance", sty.asFeaturedIn)}
            />

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__pNaNr)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/midbannerjpg.jpeg",
                fullWidth: 984,
                fullHeight: 1114,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1Ds3Z
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {"This new invention is turning "}
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"bad habits"}
                </span>
                <React.Fragment>{" into a "}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"healthy ones"}
                </span>
                <React.Fragment>
                  {
                    "...\n\nImagine being nic-free but still getting that oh-so-satisfying throat hit along with delicious natural flavoring?\n\nIt almost sounds too good to be true, right? \n\nThe solution is simple... \n\nChoose natural ingredients, "
                  }
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"NOT"}
                </span>
                <React.Fragment>
                  {" Stimulants and Harmful Chemicals:"}
                </React.Fragment>
              </React.Fragment>
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__atxTs)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"750px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/screenshot20230224At43442PMpng.png",
                fullWidth: 2352,
                fullHeight: 802,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__v1NhA
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "Our revolutionary diffuser comes in your choice of natural Sweet Mango or natural Cool Mint, providing you with the throat hit and intense flavoring you’re looking... "
                  }
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"without the guilt! "}
                </span>
                <React.Fragment>
                  {
                    "\n\nWe spent 6 years developing a device that was health-focused, lab-tested and that produced real throat hit and flavor that would effectively eliminate your cravings."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__df9C2)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"750px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/_1B8Bd693Image11000000000000000000028Png.png",
                fullWidth: 614,
                fullHeight: 332,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qx2TA
              )}
            >
              {
                "Absolutely no expense was spared with regard to design-form and function:"
              }
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__szouU)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"750px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/_4B6E6Ed1Devicegif.gif",
                fullWidth: 669,
                fullHeight: 575,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mgtRo
              )}
            >
              {
                "This ultra-modern device is slim, compact, odorless, and easy to use at any time or place. \n\nPlus it comes it comes in your choice of two delicious flavors, Sweet Mango or Cool Mint!"
              }
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__e3M4R)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"750px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/_6Bb5E2F0Image31000000000000000000028Png.png",
                fullWidth: 614,
                fullHeight: 332,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__l3IT
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "Most importantly, ALL of our formulations have undergone extensive lab - testing, to ensure the following:\n\n"
                  }
                </React.Fragment>
                {
                  <ul
                    className={classNames(
                      projectcss.all,
                      projectcss.ul,
                      sty.ul__muxXj
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__rAPoO
                      )}
                    >
                      {
                        "no harmful byproducts produced during the heating process (Gas chromatography)"
                      }
                    </li>
                  </ul>
                }
                <React.Fragment>{"\n"}</React.Fragment>
                {
                  <ul
                    className={classNames(
                      projectcss.all,
                      projectcss.ul,
                      sty.ul__aBu2P
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li___81YgE
                      )}
                    >
                      {"no evidence of carbonyl compounds"}
                    </li>
                  </ul>
                }
                <React.Fragment>{"\n"}</React.Fragment>
                {
                  <ul
                    className={classNames(
                      projectcss.all,
                      projectcss.ul,
                      sty.ul__hoS4T
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__eh42
                      )}
                    >
                      {
                        "no evidence of “bad characters” known in the industry, including Diacetyl, Acrolein and Acetoin"
                      }
                    </li>
                  </ul>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__fwwAm)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"750px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/_12A7A7BbTestingSmallerImage10Yy0Fa0000000000000281Png.png",
                fullWidth: 1258,
                fullHeight: 550,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pkjcp
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Figure 1:"}
                </span>
                <React.Fragment>
                  {
                    " ISO-Accredited Laboratory certified safety and ensured the liquid remains stable even when heated."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kuMab
              )}
            >
              {
                "We are incredibly proud to state that we have helped over 100,000 people quit while still allowing them to enjoy their habit, without any guilt!\n\nWe’ve made it easy for you to do the same, by offering a FREE box of our Sweet Mango or Cool Mint formulation, with your first purchase, auto-applied at checkout."
              }
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__bzYmq)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"750px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/sparq/images/_7E469161End1000000000000000000028Png.png",
                fullWidth: 669,
                fullHeight: 575,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tg6Ls
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Click Here to Claim Free Sweet Mango or Cool Mint Pods!"}
                </span>
              </React.Fragment>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__l3BIs
              )}
            >
              {"Fast Same Day Shipping"}
            </div>

            <div className={classNames(projectcss.all, sty.columns__hwgDw)}>
              <div className={classNames(projectcss.all, sty.column__h9Lj2)}>
                <button
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    projectcss.__wab_text,
                    sty.button__h9Jky
                  )}
                >
                  {"FEEL THE DIFFERENCE 👉"}
                </button>
              </div>

              <div className={classNames(projectcss.all, sty.column__wooU0)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fwD6X)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sparq/images/dividersvg.bin",
                    fullWidth: 5,
                    fullHeight: 150,
                    aspectRatio: 0.033333
                  }}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__j64AL)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9ZYaS
                  )}
                >
                  {"100,000+ Happy Customers! In Stock - Ships Now."}
                </div>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ihLNl)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/sparq/images/starpng2.png",
                    fullWidth: 142,
                    fullHeight: 21,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"reviews"}
            data-plasmic-override={overrides.reviews}
            className={classNames(projectcss.all, sty.reviews)}
          >
            <div
              data-plasmic-name={"review1"}
              data-plasmic-override={overrides.review1}
              className={classNames(projectcss.all, sty.review1)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__yYbJ9)}
                displayHeight={"100px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/sidereview1Png.png",
                  fullWidth: 119,
                  fullHeight: 119,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p3Vrm
                )}
              >
                {"Isaiah S."}
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___1Yb76)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/starpng2.png",
                  fullWidth: 142,
                  fullHeight: 21,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6Z0L
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"BEST ALTERNATIVE"}
                  </span>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__a71NT
                )}
              >
                {
                  '"I smoked for 12 years and tried to quit several times with no success. Until I came across Vitamin Air. Now not only do I not smoke, I’m doing something healthy in place! Great product, I’ll be a user for life!"'
                }
              </div>
            </div>

            <div
              data-plasmic-name={"review2"}
              data-plasmic-override={overrides.review2}
              className={classNames(projectcss.all, sty.review2)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ewr3)}
                displayHeight={"100px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/sidereview2Png.png",
                  fullWidth: 119,
                  fullHeight: 119,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eMoPf
                )}
              >
                {"Jason G."}
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__cVlU)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/starpng2.png",
                  fullWidth: 142,
                  fullHeight: 21,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aWtTd
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"AWESOME"}
                  </span>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bns59
                )}
              >
                {
                  "“Excellent. I love this. I quit cigs and went to the sparq. I love this device. It is natural, no nic. It really does help calm me.”"
                }
              </div>
            </div>

            <div
              data-plasmic-name={"review3"}
              data-plasmic-override={overrides.review3}
              className={classNames(projectcss.all, sty.review3)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__eh0Gd)}
                displayHeight={"100px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/sidereview3Png.png",
                  fullWidth: 119,
                  fullHeight: 119,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wudS1
                )}
              >
                {"Kathy B"}
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__vxGce)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/starpng2.png",
                  fullWidth: 142,
                  fullHeight: 21,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0C3CN
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"LOVE! LOVE!!"}
                  </span>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mSpVw
                )}
              >
                {
                  "“Im literally obsessed the the elegant\ndesign as well as the jaw dropping\npackaging.”"
                }
              </div>
            </div>

            <div
              data-plasmic-name={"review4"}
              data-plasmic-override={overrides.review4}
              className={classNames(projectcss.all, sty.review4)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__qEpQd)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/sparq/images/starpng2.png",
                  fullWidth: 142,
                  fullHeight: 21,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kIGft
                )}
              >
                <React.Fragment>
                  <React.Fragment>{"Rated 4.9 Stars By "}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"100,000+"}
                  </span>
                  <React.Fragment>{" Customers"}</React.Fragment>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xuk
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"So What Are You Waiting For?"}
                  </span>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tFsgj
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700, color: "#FFFFFF" }}
                  >
                    {
                      "Order today and receive a FREE Box of Pods or a Disposable Device!"
                    }
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "nav",
    "headline",
    "body",
    "asFeaturedIn",
    "reviews",
    "review1",
    "review2",
    "review3",
    "review4"
  ],
  nav: ["nav"],
  headline: ["headline"],
  body: ["body", "asFeaturedIn"],
  asFeaturedIn: ["asFeaturedIn"],
  reviews: ["reviews", "review1", "review2", "review3", "review4"],
  review1: ["review1"],
  review2: ["review2"],
  review3: ["review3"],
  review4: ["review4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  nav: "div";
  headline: "div";
  body: "div";
  asFeaturedIn: typeof AsFeaturedIn;
  reviews: "div";
  review1: "div";
  review2: "div";
  review3: "div";
  review4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage2__VariantsArgs;
    args?: PlasmicNewPage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage2__ArgsType,
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
          internalArgPropNames: PlasmicNewPage2__ArgProps,
          internalVariantPropNames: PlasmicNewPage2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewPage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage2";
  } else {
    func.displayName = `PlasmicNewPage2.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage2 = Object.assign(
  // Top-level PlasmicNewPage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    nav: makeNodeComponent("nav"),
    headline: makeNodeComponent("headline"),
    body: makeNodeComponent("body"),
    asFeaturedIn: makeNodeComponent("asFeaturedIn"),
    reviews: makeNodeComponent("reviews"),
    review1: makeNodeComponent("review1"),
    review2: makeNodeComponent("review2"),
    review3: makeNodeComponent("review3"),
    review4: makeNodeComponent("review4"),

    // Metadata about props expected for PlasmicNewPage2
    internalVariantProps: PlasmicNewPage2__VariantProps,
    internalArgProps: PlasmicNewPage2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage2;
/* prettier-ignore-end */
