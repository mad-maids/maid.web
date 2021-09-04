import { useStoreActions, useStoreState } from "../store/hooks";

const useCursor = (): {
	onCursor: (cursorType?: string | null) => void;
} => {
	const cursorStyles = useStoreState((state) => state.cursorStyles);
	const setCursorType = useStoreActions((state) => state.setCursorType);

	const onCursor = (cursorType?: string | null): void => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || null;
		setCursorType(cursorType);
	};

	return { onCursor };
};

export default useCursor;
