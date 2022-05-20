import {css, html} from 'element-vir';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';

export enum ToniqButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const ToniqButton = defineToniqElement({
    tagName: 'toniq-button',
    props: {
        text: '',
        variant: ToniqButtonVariant.Primary,
    },
    styles: css`
        :host {
            ${toniqFontStyles.toniqFont};
        }

        button {
            font-family: inherit;
            border: 0;
            cursor: pointer;
            ${toniqFontStyles.paragraphFont};
            ${toniqFontStyles.boldFont};
            -webkit-tap-highlight-color: transparent;

            border-radius: 8px;
        }

        button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
            padding: 12px;
        }

        button.variant-secondary {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }
    `,
    renderCallback: ({props}) => {
        const buttonClasses = `variant-${props.variant}`;

        return html`
            <button class=${buttonClasses}><slot>${props.text}</slot></button>
        `;
    },
});
