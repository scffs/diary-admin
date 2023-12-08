import {
  AppRoot,
  Group,
  Header,
  Panel,
  PanelHeader,
  SimpleCell,
  SplitCol,
  SplitLayout,
  View
} from '@vkontakte/vkui'

export const App = () => {
  return (
    // @ts-ignore типы React не идеально совместимы с Preact
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel='main'>
            <Panel id='main'>
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode='secondary'>Items</Header>}>
                {/*// @ts-ignore типы React не идеально совместимы с Preact*/}
                <SimpleCell>Hello</SimpleCell>
                {/*// @ts-ignore типы React не идеально совместимы с Preact*/}
                <SimpleCell>World</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}
