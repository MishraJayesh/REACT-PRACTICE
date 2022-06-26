import { render, screen } from '@testing-library/react';
import Quickstart from './quickstart';
import App from './App';
import FloatingActionButtons from './floatbuttons.js';
import BasicSelect from './autocomplete.js';
import ColorCheckboxes from './checkbox.js';
import Avatars2 from  './avatar.js';
import ContinuousSlider from './slider.js';
import SimpleBackdrop from './backdrop.js';

test('renders learn react link', () => {
  render(<Quickstart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<FloatingActionButtons />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<BasicSelect />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<ColorCheckboxes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Avatars2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<ContinuousSlider />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<SimpleBackdrop />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
