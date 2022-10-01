import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {ComponentProps} from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {
    createMultiElementStateReducer,
    stateToKeyObject,
} from '../../storybook-helpers/multi-element-state';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqCheckbox, ToniqToggleButton} from '../react-components';

const checkboxStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
    text: {
        table: {
            disable: true,
        },
    },
    checked: {
        table: {
            disable: true,
        },
    },
    textInput: {
        name: 'Text',
        control: 'text',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Checkbox',
    component: ToniqCheckbox,
    argTypes: checkboxStoryControls,
    args: {
        textInput: 'Custom text here',
    },
};

export default componentStoryMeta;

const checkboxStatesInit = {
    uncheckedByDefault: false,
    checkedByDefault: true,
    custom: true,
    smallText: true,
    longText: true,
} as const;

const StateKeys = stateToKeyObject(checkboxStatesInit);

export const mainStory = (
    controls: Record<keyof typeof checkboxStoryControls, string | boolean>,
) => {
    const customText = String(controls.textInput);

    const [
        state,
        updateState,
    ] = createMultiElementStateReducer(checkboxStatesInit);

    function makeInputs(key: keyof typeof state) {
        const props: ComponentProps<typeof ToniqCheckbox> = {
            checked: state[key],
            onCheckedChange: (event) => {
                const update = {
                    key,
                    value: event.detail,
                };
                console.log({update});
                updateState(update);
                handleEventAsAction(event);
            },
        };

        return props;
    }
    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Unchecked by default
            </h3>
            <ToniqCheckbox {...makeInputs(StateKeys.uncheckedByDefault)} text="Orange" />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Checked by default
            </h3>
            <ToniqCheckbox {...makeInputs(StateKeys.checkedByDefault)} text="Orange" />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqCheckbox
                {...makeInputs(StateKeys.custom)}
                checked={state[StateKeys.custom]}
                text={customText}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Multiple Checkboxes (Text longer than container)
            </h3>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    maxWidth: 250,
                }}
            >
                <ToniqCheckbox {...makeInputs(StateKeys.smallText)} text="Text" />
                <ToniqCheckbox
                    {...makeInputs(StateKeys.longText)}
                    text="Text Longer than container"
                />
            </div>
        </article>
    );
};
mainStory.storyName = 'Toniq Checkbox';
