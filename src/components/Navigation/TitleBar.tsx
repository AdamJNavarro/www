import {
  ActionIcon,
  Burger,
  createStyles,
  Group,
  MediaQuery,
  rem,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { GlobalNavigationContext } from '../Providers';

interface TitleBarProps {
  title: string;
  titleRef?: React.MutableRefObject<HTMLParagraphElement | null>;
  magicTitle?: boolean;
  globalMenu?: boolean;
  backBtn?: boolean;
  backBtnHref?: string;
  scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
  children?: any;
}

const useStyles = createStyles((theme) => ({
  titleBar: {
    position: 'sticky',
    top: '0px',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },

  title: {
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: 'bold',
  },
}));

export default function TitleBar({
  title,
  // @ts-ignore
  titleRef = null,
  magicTitle = false,
  globalMenu = true,
  backBtn = false,
  backBtnHref,
  // @ts-ignore
  scrollRef = null,
  children,
}: TitleBarProps) {
  const { classes } = useStyles();
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);
  const darkMode = true;
  const [offset, setOffset] = useState<number>(200);
  const [opacity, setOpacity] = useState<number>(0);
  const [currentScrollOffset, setCurrentScrollOffset] = useState<number>(0);

  const [initialTitleOffsets, setInitialTitleOffsets] = useState({
    top: 0,
    bottom: 0,
  });

  const initialTitleOffsetsRef = useRef(initialTitleOffsets);
  const handleInitialTitleOffsets = (data: any) => {
    initialTitleOffsetsRef.current = data;
    setInitialTitleOffsets(data);
  };

  const opacityRef = useRef(opacity);
  const handleOpacity = (data: any) => {
    opacityRef.current = data;
    setOpacity(data);
  };

  const currentScrollOffsetRef = useRef(currentScrollOffset);
  const handleCurrentScrollOffset = (data: any) => {
    currentScrollOffsetRef.current = data;
    setCurrentScrollOffset(data);
  };

  const handler = useCallback(() => {
    // @ts-ignore
    const shadowOpacity = scrollRef.current.scrollTop / 200;
    handleCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity);

    if (!titleRef?.current || !initialTitleOffsetsRef?.current) return;

    const titleTop = titleRef.current.getBoundingClientRect().top - 48;
    const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56;
    const initialOffsets = initialTitleOffsetsRef.current;

    const offsetAmount =
      parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100;

    const opacityOffset =
      parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1;

    setOffset(Math.min(Math.max(offsetAmount, 0), 100));
    handleOpacity(opacityOffset);
  }, [title, titleRef, scrollRef]);

  useEffect(() => {
    scrollRef?.current?.addEventListener('scroll', handler);
    return () => scrollRef?.current?.removeEventListener('scroll', handler);
  }, [title, titleRef, scrollRef]);

  useEffect(() => {
    if (!titleRef?.current || !scrollRef?.current) return;
    // eslint-disable-next-line no-param-reassign
    scrollRef.current.scrollTop = 0;
    handleOpacity(0);
    handleInitialTitleOffsets({
      bottom: titleRef.current.getBoundingClientRect().bottom - 56,
      top: titleRef.current.getBoundingClientRect().top - 48,
    });
  }, [title, titleRef, scrollRef]);

  return (
    <div
      className={classes.titleBar}
      style={{
        background: `rgba(${darkMode ? '50,50,50' : '255,255,255'},${
          currentScrollOffset === 0
            ? currentScrollOffset
            : darkMode
              ? currentScrollOffset + 0.5
              : currentScrollOffset + 0.8
        })`,
        boxShadow: `0 1px 3px rgba(0,0,0,${currentScrollOffset})`,
        minHeight: rem('48px'),
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Group align="center" spacing="md">
          {globalMenu && (
            <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
              <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} size="sm" />
            </MediaQuery>
          )}

          {backBtn && backBtnHref && (
            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
              <Link href={backBtnHref}>
                <ActionIcon size="sm">
                  <IconArrowLeft />
                </ActionIcon>
              </Link>
            </MediaQuery>
          )}

          <Text
            className={classes.title}
            style={
              magicTitle
                ? {
                    transform: `translateY(${offset}%)`,
                    opacity: `${opacity}`,
                  }
                : {}
            }
          >
            {title}
          </Text>
        </Group>
      </div>
      {children}
    </div>
  );
}
