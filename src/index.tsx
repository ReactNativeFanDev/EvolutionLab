import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { StackNavigation } from '@navigation/stackNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
