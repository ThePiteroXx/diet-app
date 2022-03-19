import styled from 'styled-components';

export const MealInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.white};
  overflow-y: auto;
`;

export const MealInfoHeader = styled.div`
  position: relative;
  width: 100%;
  height: 340px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    height: 440px;
    img {
      width: 420px;
      height: 330px;
    }
  }
`;

export const MealInfoBody = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 500px;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 30px 30px 0 0;
  z-index: 2;
  transform: translateY(-50px);

  .title {
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.primary.mainText};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 800;
  }

  .info {
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: flex-end;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      font-size: 20px;
      font-weight: 600;

      svg {
        width: 22px;
      }
    }
    .left {
      margin-right: auto;
      padding: 10px 14px;
      justify-self: flex-start;
      border-radius: 24px;
      color: ${({ theme }) => theme.colors.secondary.green};
      background-color: rgba(123, 156, 217, 0.3);
    }
  }

  .ingredients {
    p {
      font-size: ${({ theme }) => theme.fontSize.l};
      color: ${({ theme }) => theme.colors.secondary.green};

      span {
        color: ${({ theme }) => theme.colors.primary.mainText};
        font-weight: 600;
      }
    }

    ul {
      padding: 20px;

      li {
        margin: 5px 0;
        span {
          color: ${({ theme }) => theme.colors.primary.green};
        }
      }
    }
  }

  .title-step {
    margin: 30px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 900;
  }

  .step {
    margin: 15px 0;
    p {
      margin: 5px 0;
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: 600;
    }
  }
`;

/*
  Desktop styles
*/
export const MealInfoWrapperDesktop = styled.div`
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-template-rows: 1fr 3fr auto;
  width: 1000px;
  height: 90%;
  max-height: 900px;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 20px;
  overflow-y: auto;

  .title {
    margin: 20px 0;
    grid-column: 1 / -1;
    grid-row: 1;
    color: ${({ theme }) => theme.colors.primary.mainText};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 800;
  }

  .main-img {
    grid-column: 1;
    grid-row: 2;
    width: 490px;
    height: 380px;
    border-radius: 20px;
  }

  .infoWrapper {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .info {
    grid-column: 2;
    grid-row: 2;
    align-self: start;
    display: flex;
    gap: 16px;
    width: 100%;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      font-size: 20px;
      font-weight: 600;

      svg {
        width: 22px;
      }
    }
    .left {
      height: 80px;
      padding: 10px 14px;
      border-radius: 24px;
      color: ${({ theme }) => theme.colors.secondary.green};
      background-color: rgba(123, 156, 217, 0.3);
    }
  }

  .ingredients {
    p {
      font-size: ${({ theme }) => theme.fontSize.l};
      color: ${({ theme }) => theme.colors.secondary.green};
    }

    span {
      color: ${({ theme }) => theme.colors.primary.mainText};
    }

    ul {
      padding: 20px;

      li {
        margin: 5px 0;
        span {
          color: ${({ theme }) => theme.colors.primary.green};
        }
      }
    }
  }

  .steps {
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    justify-content: center;
    .title-step {
      margin: 30px 0;
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: 900;
    }

    .step {
      margin: 15px 0;
      p {
        margin: 5px 0;
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 600;
      }
    }
  }
`;
