import { toSvg } from 'jdenticon';

export interface IdenticonProps extends React.ComponentPropsWithoutRef<'div'> {
	size?: number;
	hash: string;
}

export const Identicon: React.FC<IdenticonProps> = ({ hash, size = 24, ...rest }) => (
	<div {...rest} dangerouslySetInnerHTML={{ __html: toSvg(hash, size) }} />
);
