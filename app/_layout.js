import { Slot, Stack } from 'expo-router';
import SettingsContextProvider from '../context/SettingsContext';
export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <SettingsContextProvider>
      <Stack />
    </SettingsContextProvider>
  );
}
