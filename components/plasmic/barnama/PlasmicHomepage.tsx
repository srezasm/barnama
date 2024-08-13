// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: v57deDbCRSiUfTDw1tW741
// Component: Vr6w4OQ1QIr8

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: b2vEI7YNG0dM/codeComponent
import { Input } from "@/fragment/components/input"; // plasmic-import: RUNfWewnW4PM/codeComponent
import Button from "../../Button"; // plasmic-import: fg07TcMEp1vM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: v57deDbCRSiUfTDw1tW741/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Vr6w4OQ1QIr8/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: srpZpCYAa_Ql/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Hw4uH64OkDA1/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3EgpshlPs7dM/icon

import __lib_copyToClipboard from "copy-to-clipboard";

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  h1?: Flex__<"h1">;
  fragmentApiRequest?: Flex__<typeof ApiRequest>;
  svg?: Flex__<"svg">;
  freeBox?: Flex__<"div">;
  fragmentInput?: Flex__<typeof Input>;
  button?: Flex__<typeof Button>;
};

export interface DefaultHomepageProps {}

const $$ = {
  copyToClipboard: __lib_copyToClipboard
};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "fragmentApiRequest.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fragmentApiRequest.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fragmentApiRequest.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fragmentInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.fragmentApiRequest.data.short_url;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
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
            projectcss.plasmic_tokens,
            sty.root
          )}
          dir={"rtl"}
          onLoad={async event => {
            const $steps = {};

            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {
                "\u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc\u200c\u0647\u0627"
              }
            </h1>
            <ApiRequest
              data-plasmic-name={"fragmentApiRequest"}
              data-plasmic-override={overrides.fragmentApiRequest}
              className={classNames("__wab_instance", sty.fragmentApiRequest)}
              errorDisplay={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bGukl
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $state.fragmentApiRequest.error.message;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Error fetching data";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              }
              loadingDisplay={
                <React.Fragment>
                  <Icon3Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qLXa
                    )}
                  >
                    {
                      "\u062f\u0631\u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a .."
                    }
                  </div>
                </React.Fragment>
              }
              method={"GET"}
              onError={generateStateOnChangeProp($state, [
                "fragmentApiRequest",
                "error"
              ])}
              onLoading={generateStateOnChangeProp($state, [
                "fragmentApiRequest",
                "loading"
              ])}
              onSuccess={generateStateOnChangeProp($state, [
                "fragmentApiRequest",
                "data"
              ])}
              params={(() => {
                try {
                  return {
                    user_id: $ctx.query.user_id
                  };
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              url={"https://srezas.app.n8n.cloud/webhook/shortener"}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <Input
                  data-plasmic-name={"fragmentInput"}
                  data-plasmic-override={overrides.fragmentInput}
                  attributes={{ dir: "ltr" }}
                  className={classNames("__wab_instance", sty.fragmentInput)}
                  disabled={true}
                  onChange={generateStateOnChangeProp($state, [
                    "fragmentInput",
                    "value"
                  ])}
                  placeholder={``}
                  type={"text"}
                  value={generateStateValueProp($state, [
                    "fragmentInput",
                    "value"
                  ])}
                />

                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"softBlue"}
                  onClick={async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return $$.copyToClipboard(
                                $state.fragmentInput.value
                              );
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              undefined,
                              "\u0644\u06cc\u0646\u06a9 \u06a9\u067e\u06cc \u0634\u062f.",
                              "top-center"
                            ]
                          };
                          return $globalActions["Fragment.showToast"]?.apply(
                            null,
                            [...actionArgs.args]
                          );
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }
                  }}
                  size={"compact"}
                >
                  {"\u06a9\u067e\u06cc"}
                </Button>
              </Stack__>
            </ApiRequest>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "h1",
    "fragmentApiRequest",
    "svg",
    "freeBox",
    "fragmentInput",
    "button"
  ],
  section: [
    "section",
    "h1",
    "fragmentApiRequest",
    "svg",
    "freeBox",
    "fragmentInput",
    "button"
  ],
  h1: ["h1"],
  fragmentApiRequest: [
    "fragmentApiRequest",
    "svg",
    "freeBox",
    "fragmentInput",
    "button"
  ],
  svg: ["svg"],
  freeBox: ["freeBox", "fragmentInput", "button"],
  fragmentInput: ["fragmentInput"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h1: "h1";
  fragmentApiRequest: typeof ApiRequest;
  svg: "svg";
  freeBox: "div";
  fragmentInput: typeof Input;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    fragmentApiRequest: makeNodeComponent("fragmentApiRequest"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),
    fragmentInput: makeNodeComponent("fragmentInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
