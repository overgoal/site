export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;

export function assignRef<T = unknown>(
  ref: ReactRef<T> | null | undefined,
  value: T
) {
  if (ref == null) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    ref.current = value;
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export function mergeRefs<T>(
  ...refs: Array<
    | ReactRef<T>
    | React.Dispatch<React.SetStateAction<T | null>>
    | null
    | undefined
  >
) {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (ref === null || ref === undefined) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        assignRef(ref, node);
      }
    });
  };
}