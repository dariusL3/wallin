import React from 'react';
import {Text, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '@src/components/Header';
import PropTypes from 'prop-types';
import { camelCaseKeys } from '@src/utils';
import { ScrollView, View } from '@src/components/core';
import { useFocusEffect } from 'react-navigation-hooks';
import { View2 } from '@components/core/View';
import withLazy from '@src/components/LazyHoc/LazyHoc';
import withNews from './News.enhance';
import { newsSelector } from './News.selector';
import { LAYOUT_TYPE } from './News.constant';
import { styled } from './News.styled';
import ListNews from './News.listNews';
import { handleShouldRenderCategory } from './News.utils';
import { userIdSelector } from '../Profile';

const Title = React.memo(({ title, parentCatId }) => {
  if (!title) {
    return null;
  }
  return (
    <Text style={[styled.title, parentCatId !== 0 && styled.subTitle]}>
      {title}
    </Text>
  );
});

const ListCats = ({ listCats }) => {
  return (
    <View style={styled.listCats}>
      {listCats.map((category) => (
        <Category category={category} key={category?.ID} />
      ))}
    </View>
  );
};

const Category = (props) => {
  const { category, firstChild, lastChild, lastNewsID } = props;
  const userId = useSelector(userIdSelector);
  const _category = camelCaseKeys(category);
  const {
    title,
    listNews,
    listCats,
    parentCatId,
    type,
    layoutType,    
  } = _category;
  const shouldRenderCategory = handleShouldRenderCategory(_category, userId);
  const renderChild = () => {
    switch (layoutType) {
    case LAYOUT_TYPE.root: {
      return <ListNews listNews={listNews} type={type} lastNewsID={lastNewsID} />;
    }
    case LAYOUT_TYPE.child: {
      return <ListCats listCats={listCats} />;
    }
    default:
      return null;
    }
  };
  if (!shouldRenderCategory) {
    return null;
  }
  return <View>{renderChild()}</View>;
};

const News = (props) => {
  const { handleFetchNews } = props;
  const { data, isFetching } = useSelector(newsSelector);  
  const lastNewsID = props?.navigation.getParam('lastNewsID', 0);  
  
  useFocusEffect(
    React.useCallback(() => {
      handleFetchNews();
    }, []),
  );
  return (
    <View2 style={styled.container}>
      <Header title="Bulletin" style={styled.header} />
      <View fullFlex borderTop style={{ overflow: 'hidden' }}>
        <ScrollView
          refreshControl={(
            <RefreshControl
              refreshing={isFetching}
              onRefresh={handleFetchNews}
            />
          )}
          style={styled.scrollViewContainer}
          contentContainerStyle={styled.scrollViewContentContainer}
        >
          {data.length > 0 &&
            data
              .sort((a, b) => a?.Type - b?.Type)
              .map((category, index, arr) => (
                <Category
                  category={category}
                  firstChild={index === 0}
                  lastChild={index === arr.length - 1}
                  key={category?.ID}
                  lastNewsID={lastNewsID}
                />
              ))}
        </ScrollView>
      </View>
    </View2>
  );
};

News.propTypes = {
  handleFetchNews: PropTypes.func.isRequired,
};

Category.defaultProps = {
  lastChild: false,
  firstChild: false,
};

Category.propTypes = {
  category: PropTypes.any.isRequired,
  firstChild: PropTypes.bool,
  lastChild: PropTypes.bool,
};

export default withLazy(withNews(News));
