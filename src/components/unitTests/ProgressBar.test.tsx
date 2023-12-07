  // ProgressBar.test.tsx
  import React from 'react';
  import { render } from '@testing-library/react';
  import ProgressBar from "../ProgressBar/ProgressBar";


  describe('ProgressBar Component', () => {
    test('renders ProgressBar with default props', () => {
    
      const { container } = render(<ProgressBar />);

      expect(container.firstChild).toBeDefined();
      // Verifica se o componente foi renderizado corretamente
      

      // Pode adicionar mais verificações conforme necessário
    });

    test('renders ProgressBar with custom props', () => {
      const customProps = {
        value: 50,
        colorProgress: 'blue',
        style: {marginTop: '10px'},
        styleProgress:{borderRadius: '10px'},
        className: 'custom-class',
        classNameProgress: 'custom-progress-class',
      };
      

      // Verifica se as classes e estilos foram aplicados corretamente
      expect(customProps.className).toBe('custom-class');
      expect(customProps.classNameProgress).toBe('custom-progress-class');
      expect(customProps.style).toEqual({"marginTop": "10px"});
      expect(customProps.styleProgress).toEqual({"borderRadius": "10px"});
    });
  });