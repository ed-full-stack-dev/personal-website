import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  codeString: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString, language = 'javascript' }) => {
  console.log('CodeBlock', codeString);
  return (
    <div>
      <SyntaxHighlighter
        customStyle={{
          fontFamily: 'Roboto',
          fontSize: '1.2rem',
          fontWeight: 500,
        }}
        language={language}
        style={a11yDark}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;


export function getLanguageFromCode(codeStr: string) {
  let lang = 'js';
  if (codeStr.includes('/* jsx */')) {
    lang = 'jsx';
  }
  if (codeStr.includes('/* js */')) {
    lang = 'js';
  }
  if (codeStr.includes('/* css */')) {
    lang = 'css';
  }
  if (codeStr.includes('<!-- html -->')) {
    lang = 'html';
  }
  if (codeStr.includes('/* ts */')) {
    lang = 'ts';
  }
  return lang;
}


export function renderOptions(content: any) {
  console.log('content', content)
  let entryMap = new Map();
  if (content?.links?.assets?.block) {
    const assets = content?.links?.assets?.block;
    assets.forEach((asset: any) => {
      entryMap.set(asset.sys.id, asset);
    });
  }
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        const nodeHasVideoLink = node?.content.find((content: any) => content.nodeType === 'hyperlink');
        if (nodeHasVideoLink) {
          const videoId = nodeHasVideoLink?.data.uri.split('youtu.be/')[1];
          return (
            <div  className='rounded-lg p-2 flex justify-center mt-6 mb-36'>
              <iframe
              className='rounded-lg yt-player'
              title="Tutorial Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
            </div>
          )
        }

          if (node?.content[0].marks[0]?.type === 'code') {
            const codeStr = node?.content[0]?.value;
            const lang = getLanguageFromCode(codeStr);
            return (
              <div className='code-block'>
                <CodeBlock codeString={codeStr} language={lang} />
              </div>
            );
          }

          return <p className='text-xl  md:text-left text-gray-600 font-medium lh-1'>{children}</p>;
        },
        [BLOCKS.HEADING_1]: (node: any, children: any) => {
          return <h1 className=' text-4xl font-bold text-gray-800'>{children}</h1>;
        },
          [BLOCKS.HEADING_2]: (node: any, children: any) => {
            return <h2 className=' text-3xl font-bold text-gray-800'>{children}</h2>;
          },
            [BLOCKS.HEADING_3]: (node: any, children: any) => {
              return <h3 className=' text-2xl font-bold text-gray-800'>{children}</h3>;
            },
              [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
                const asset = entryMap.get(node?.data?.target?.sys.id);

                return (
                  <div className='center'>
                    <img
                      className='img-fluid p-1'
                      src={asset.url}
                      alt={asset.title}
                      width={500}
                    />
                  </div>
                );
              },
     
        
      
    },
    };
  }


  export function getClassNameBySubjectType(subjectType: string) {
    const type = subjectType.toLowerCase();
    switch (true) {
      case type.includes('typescript'):
        return 'text-red-500';
      case type.includes('javascript'):
        return 'text-yellow-500';
      case type.includes('react'):
        return 'text-blue-500';
      case type.includes('css'):
        return 'text-purple-500';
      case type.includes('html'):
        return 'text-orange-500';
      case type.includes('mongodb'):
        return 'text-green-500';
      case type.includes('graphql'):
        return 'text-pink-500';
      case type.includes('next'):
        return 'text-gray-500';
      default:
        return 'text-pink-500';
    }
  }