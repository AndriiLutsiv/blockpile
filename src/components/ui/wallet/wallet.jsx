import { useAccount, useBalance } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './wallet.module.scss';
import { Layout } from '../../layout';

export default function Wallet() {
    const { address, isConnected } = useAccount();
    const { data: balance } = useBalance({
        addressOrName: address,
    });

    return (
        <Layout title='Wallet'>
            <div className={styles.wallet}>
                <ConnectButton className={styles.walletButton} />
                {isConnected && balance && (
                    <div className={styles.row}>
                        <strong>Balance:</strong> {balance.formatted} {balance.symbol}
                    </div>
                )}
            </div>
        </Layout>
    );
}
