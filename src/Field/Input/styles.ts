import { transparentize } from 'polished';
import styled from 'styled-components';
import {
  SECONDARY_TEXT_COLOR,
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  DISABLED_OPACITY,
} from '../../constants/styles';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${SECONDARY_TEXT_COLOR};
  background-color: transparent;
  border: 1px solid ${SECONDARY_COLOR};
  appearance: none;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 0.2rem ${transparentize(0.75, PRIMARY_COLOR)};
  }

  &:disabled {
    background-color: ${SECONDARY_COLOR};
    opacity: ${DISABLED_OPACITY};
  }
`;
