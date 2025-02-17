import {getEnumTypedValues, getObjectTypedKeys} from '@augment-vir/common';
import {ArgTypes, Meta} from '@storybook/react';
import React from 'react';
import {wrapTypeWithReadonly} from '../augments/type';
import {createCssVarMap} from '../storybook-helpers/css-var-story-helpers';
import {getAllCssVars} from '../storybook-helpers/css-vars';
import {toniqColors} from './colors';
import {cssToReactStyleObject} from './css-to-react';
import {toniqFontStyles, toniqFontStylesCssVarNames} from './fonts';

const flattenedFontStyleCssVarNames: string[] = Object.values(toniqFontStylesCssVarNames)
    .map((value): string[] => {
        return Object.values(value).map((mappingValue): string => String(mappingValue));
    })
    .flat();

enum ExtraApplyStyleOptions {
    None = 'None',
    All = 'All CSS vars',
}

const fontsStoryControls = wrapTypeWithReadonly<ArgTypes>()({
    styleInput: {
        name: 'CSS Value',
        control: 'text',
    },
    applyStyle: {
        name: 'Apply Style To',
        control: 'select',
        options: [
            ...getEnumTypedValues(ExtraApplyStyleOptions),
            ...flattenedFontStyleCssVarNames,
        ],
    },
} as const);

const componentStoryMeta: Meta<any> = {
    title: 'Styles/Toniq Fonts',
    argTypes: fontsStoryControls as ArgTypes,
    args: {
        styleInput: '',
        applyStyle: ExtraApplyStyleOptions.None,
    },
    parameters: {
        actions: {
            disable: true,
        },
    },
};

function generateAppliedCssVarStyles(controls: Record<keyof typeof fontsStoryControls, string>) {
    if (!controls.applyStyle || !controls.styleInput) {
        return {};
    }
    if (controls.applyStyle === ExtraApplyStyleOptions.None) {
        return {};
    }
    if (controls.applyStyle === ExtraApplyStyleOptions.All) {
        return createCssVarMap(controls.styleInput, flattenedFontStyleCssVarNames);
    }

    return {[controls.applyStyle]: controls.styleInput};
}

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof fontsStoryControls, string>) => {
    const colorInstances = getObjectTypedKeys(toniqFontStyles).map((fontStyleKey) => {
        const fontStyle = toniqFontStyles[fontStyleKey];
        const fontStyleCssVars = getAllCssVars(fontStyle);

        const varsTemplate = getObjectTypedKeys(fontStyleCssVars).map((cssPropName) => {
            const varName = fontStyleCssVars[cssPropName]?.cssVarName;
            const defaultValue = fontStyleCssVars[cssPropName]?.defaultValue;

            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    key={cssPropName}
                >
                    <span
                        style={{
                            marginTop: '8px',
                            color: String(toniqColors.pageSecondary.foregroundColor),
                        }}
                    >
                        {cssPropName}: <code>{defaultValue}</code>
                    </span>

                    <span style={{color: String(toniqColors.pageTertiary.foregroundColor)}}>
                        {varName}
                    </span>
                </div>
            );
        });

        return (
            <div
                key={fontStyleKey}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '16px',
                        borderRadius: '4px',
                        border: `1px solid ${toniqColors.divider.foregroundColor}`,
                    }}
                >
                    <div
                        className={`${fontStyleKey} font-style-preview`}
                        style={{
                            borderRadius: '4px',
                            border: `1px solid ${toniqColors.divider.foregroundColor}`,
                            padding: '8px 24px',
                            display: 'inline-block',
                            ...cssToReactStyleObject(fontStyle),
                        }}
                    >
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '4px',
                        }}
                    >
                        <span
                            style={{
                                ...cssToReactStyleObject(toniqFontStyles.boldFont),
                            }}
                        >
                            {fontStyleKey}
                        </span>
                        {varsTemplate}
                    </div>
                </div>
            </div>
        );
    });

    const cssVarStyles = generateAppliedCssVarStyles(controls);

    return (
        <article
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                padding: '16px',
                justifyContent: 'center',
                ...cssToReactStyleObject(toniqFontStyles.paragraphFont),
                ...cssVarStyles,
            }}
        >
            {colorInstances}
        </article>
    );
};
mainStory.storyName = 'Toniq Fonts';
