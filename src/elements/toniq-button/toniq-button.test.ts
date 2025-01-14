import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {
    getTextContentThroughShadow,
    queryThroughShadow,
} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {ToniqButton} from './toniq-button.element';

describe(ToniqButton.tagName, () => {
    createElementRegistrationTest(ToniqButton);

    it(
        'renders with default values',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                    <${ToniqButton}></${ToniqButton}>
                `,
            );

            const innerButton = queryThroughShadow('button', rendered);
            assertInstanceOf(innerButton, HTMLButtonElement);
        }),
    );

    it(
        'should render assigned text',
        createFixtureTest(async () => {
            const textToRender = 'Buy Now';

            const rendered = await fixture(
                html`
                    <${ToniqButton} ${assign(ToniqButton, {text: textToRender})}></${ToniqButton}>
                `,
            );
            assert.equal(getTextContentThroughShadow(rendered), textToRender);
        }),
    );

    runFocusTests(
        html`
            <${ToniqButton}></${ToniqButton}>
        `,
        true,
    );
});
