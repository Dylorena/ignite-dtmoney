import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    letter-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
      line-height: 11.5rem;
    }

    td {
      background: var(--shape);
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      border: 0;
      color: var(--text-body);

      &:first-child{
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`