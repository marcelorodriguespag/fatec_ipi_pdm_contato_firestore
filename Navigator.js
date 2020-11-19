import { createStackNavigator, CreateStackNavigator } from 'react-navigation-stack';
import { createAppContainer, CreateAppContainer } from 'react-navigation';
import ContatosTela from './tela/ContatosTela';
import AdicionarContatoTela from './tela/AdicionarContatoTela';

const Navigator = createStackNavigator (
    {
        Contatos: ContatosTela,
        AdicionarContato: AdicionarContatoTela
    }
)

export default createAppContainer(Navigator);

