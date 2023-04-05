import * as S from './styles';
import LogoSvg from '@assets/ignite-simbol.svg';
import { NewTransactionModal } from '@components/NewTransactionModal';
import * as Dialog from '@radix-ui/react-dialog';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={LogoSvg} alt="Logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.Content>
    </S.Container>
  );
};
