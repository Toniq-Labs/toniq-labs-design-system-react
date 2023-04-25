import {Copy16Icon} from '@toniq-labs/design-system-react';
import {
    ToniqButton,
    ToniqIcon,
} from '@toniq-labs/design-system-react/dist/esm/elements/react-components';

export default function App() {
    return (
        <div className="App">
            {ToniqButton.tagName}
            <ToniqIcon icon={Copy16Icon} />
        </div>
    );
}
