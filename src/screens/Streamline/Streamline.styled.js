import { COLORS, FONT } from '@src/styles';
import { StyleSheet } from 'react-native';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  hook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  hookTitle: {
    fontFamily: FONT.NAME.medium,
    lineHeight: FONT.SIZE.regular + 3,
    fontSize: FONT.SIZE.regular,
  },
  hookDesc: {
    fontFamily: FONT.NAME.medium,
    lineHeight: FONT.SIZE.regular + 3,
    fontSize: FONT.SIZE.regular,
  },
  tooltip: {
    fontFamily: FONT.NAME.medium,
    lineHeight: 30,
    fontSize: FONT.SIZE.medium,
  },
  scrollview: {
    paddingTop: 32,
  },
  btnStyle: {
    marginVertical: 30,
  },
  tooltipContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  questionIcon: {
    marginLeft: 5,
  },
  emptyTitle: {
    fontFamily: FONT.NAME.bold,
    fontSize: FONT.SIZE.medium,
    lineHeight: 30,
    marginBottom: 30,
  },
  emptyText: {
    fontFamily: FONT.NAME.medium,
    fontSize: FONT.SIZE.medium,
    lineHeight: 30,
    marginBottom: 30,
  },
  emptyContainer: {
    flex: 1,
    paddingTop: 32,
  },
  pendingContainer: {
    flex: 1,
    paddingTop: 32,
  },
});
