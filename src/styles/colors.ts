import {camelCaseToKebabCase, mapObject} from 'augment-vir';
import {css} from 'element-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {wrapTypeWithReadonly} from '../augments/type';

export type ColorKey = keyof typeof fallbackColors;

export type DualColorDefinition = Readonly<{
    foregroundColor: CSSResult;
    backgroundColor: CSSResult;
}>;

const mainLightPalette = (() => {
    const pagePrimary: DualColorDefinition = {
        /** Default page background color. */
        backgroundColor: css`#ffffff`,
        /** Default page foreground (usually text) color. */
        foregroundColor: css`#000000`,
    };
    /** For secondary foreground (text) elements, lighter than the primary foreground color. */
    const pageSecondary: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#5B5D5C`,
    };
    /** For tertiary foreground (text) elements, slightly lighter than the secondary foreground color. */
    const pageTertiary: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#ACADAD`,
    };

    const brandPrimary: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#00D093`,
    };

    /** The color for divider lines. */
    const divider: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#D6D6D6`,
    };
    /** Drop shadow for some rounded rectangle shapes. */
    const dropShadow: DualColorDefinition = {
        ...pagePrimary,
        backgroundColor: css`#D2EEFA`,
    };
    const accentPrimary: DualColorDefinition = {
        /** Color for primary accents, like primary buttons. */
        backgroundColor: brandPrimary.foregroundColor,
        /** Color for the foreground (text) on top of accentPrimaryBackgroundColor. */
        foregroundColor: css`#ffffff`,
    };
    const accentSecondary: DualColorDefinition = {
        /** Color for secondary item backgrounds, like inactive toggle buttons or header backgrounds. */
        backgroundColor: css`#F1F3F6`,
        /** Color for foreground (text) on top of accentSecondaryBackgroundColor. */
        foregroundColor: css`#000000`,
    };
    const accentTertiary: DualColorDefinition = {
        ...accentSecondary,
        /**
         * Additional color for secondary foregrounds (text) when an element is inactive or its
         * foreground is just a placeholder.
         */
        foregroundColor: css`#9A9A9D`,
    };
    const pageInteraction: DualColorDefinition = {
        ...brandPrimary,
    };

    return wrapTypeWithReadonly<Record<string, DualColorDefinition>>()({
        brandPrimary,
        pagePrimary,
        pageSecondary,
        pageTertiary,
        pageInteraction,
        divider,
        dropShadow,
        accentPrimary,
        accentSecondary,
        accentTertiary,
    });
})();

/**
 * These are used as fallback values for CSS vars. They should never be used directly, as that would
 * block the CSS vars from being effective.
 */
const fallbackColors = mainLightPalette;

function colorKeyToCssVarName(colorKey: ColorKey, type: keyof DualColorDefinition): CSSResult {
    return unsafeCSS(`--toniq-${camelCaseToKebabCase(colorKey)}-${camelCaseToKebabCase(type)}`);
}

/**
 * CSS var names for all the design system colors. These should not be used as VALUES in CSS, use
 * the "toniqColors" object exported below for CSS values. This object's values should be used as
 * properties. Meaning, these values should only be used for setting the CSS variables (if needed).
 */
export const toniqColorCssVarNames: Record<ColorKey, DualColorDefinition> = mapObject(
    fallbackColors,
    (colorKey) => {
        const cssVarsDefinition: DualColorDefinition = {
            backgroundColor: colorKeyToCssVarName(colorKey, 'backgroundColor'),
            foregroundColor: colorKeyToCssVarName(colorKey, 'foregroundColor'),
        };
        return cssVarsDefinition;
    },
);

function colorValueToVarCallDualDefinition(
    colorKey: ColorKey,
    type: keyof DualColorDefinition,
): CSSResult {
    const fallbackColor = fallbackColors[colorKey][type];
    const cssVarName = toniqColorCssVarNames[colorKey][type];

    return css`var(${cssVarName}, ${fallbackColor})`;
}

/**
 * Colors for the design system. These should be used directly as values in CSS.
 *
 * These colors use all the design system CSS vars and include fallback values to the default design
 * system palette. To override any of these colors, set the CSS var from the corresponding ColorKey
 * in toniqColorCssVarNames.
 */
export const toniqColors: Record<ColorKey, DualColorDefinition> = mapObject(
    toniqColorCssVarNames,
    (colorKey): DualColorDefinition => {
        return {
            foregroundColor: colorValueToVarCallDualDefinition(colorKey, 'foregroundColor'),
            backgroundColor: colorValueToVarCallDualDefinition(colorKey, 'backgroundColor'),
        };
    },
);

export function applyBackgroundAndForeground(colorDefinition: DualColorDefinition): CSSResult {
    return css`
        background-color: ${colorDefinition.backgroundColor};
        color: ${colorDefinition.foregroundColor};
    `;
}