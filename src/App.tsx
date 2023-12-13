import {
    Button,
    Calendar,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    defaultTheme,
    Form,
    ProgressBar,
    Provider,
    Slider,
    StatusLight,
    Switch,
    TextField,
    ToggleButton,
} from '@adobe/react-spectrum';
import styles from './App.module.scss';

export const App = function App() {
    return (
        <Provider theme={defaultTheme}>
            <div className={styles.root}>
                <div className={styles.box}>
                    <Button variant="accent" onPress={() => alert('Hey there!')}>
                        Hello React Spectrum!
                    </Button>
                    <ToggleButton>Pin</ToggleButton>
                    <Switch>Low power mode</Switch>
                    <Slider label="Cookies to buy" defaultValue={12} />
                    <DatePicker label="Event date" />
                </div>
                <div className={styles.box}>
                    <ProgressBar label="Loading…" minValue={50} maxValue={150} value={100} />
                    <Calendar aria-label="Event date" />
                </div>
                <div className={styles.box}>
                    <StatusLight variant="positive">Semantic color</StatusLight>
                    <StatusLight variant="yellow">Label color</StatusLight>
                    <CheckboxGroup label="Favorite sports">
                        <Checkbox value="soccer">Soccer</Checkbox>
                        <Checkbox value="baseball">Baseball</Checkbox>
                        <Checkbox value="basketball">Basketball</Checkbox>
                    </CheckboxGroup>
                    <Form maxWidth="size-3600">
                        <TextField label="Email" />
                        <TextField label="Password" />
                        <Checkbox>Remember me</Checkbox>
                    </Form>
                </div>
            </div>
        </Provider>
    );
};

export default App;
