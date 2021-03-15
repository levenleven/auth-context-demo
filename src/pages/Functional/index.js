import { useAuth } from '../../authContext';

export const FunctionalComponent = () => {
  const { authenticated } = useAuth();
  const readonly = !authenticated;

  return (
    <>
      <h2>Functional component demo</h2>
      <input
        type="text"
        placeholder={readonly ? 'readonly' : 'you have editing rights'}
        readOnly={readonly}
      />
    </>
  );
};
